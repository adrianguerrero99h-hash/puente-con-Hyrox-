import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import WeekNav from './components/WeekNav';
import Glossary from './components/Glossary';
import WorkoutDetails from './components/WorkoutDetails';
import CalendarModal from './components/CalendarModal';
import { trainingData } from './constants';
import type { Workout } from './types';
import { formatDate } from './utils/date';
import { formatWorkoutForSharing } from './utils/workoutUtils';
import TestsPage from './components/TestsPage';
import ProfilePage from './components/ProfilePage';
import LoginScreen from './components/LoginScreen';
import CalendarIcon from './components/icons/CalendarIcon';
import ShareIcon from './components/icons/ShareIcon';
import { getAuth, setAuth, clearAuth, getOnboardingStatus, setOnboardingStatus, type AuthData, setStravaAuth, setStravaActivities } from './utils/localStorage';
import OnboardingGuide from './components/OnboardingGuide';
import { exchangeStravaCode, fetchStravaActivities } from './utils/strava';


const App: React.FC = () => {
    const [auth, setAuthData] = useState<AuthData>(getAuth);
    const [currentView, setCurrentView] = useState<'workouts' | 'tests' | 'profile'>('workouts');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isCalendarOpen, setCalendarOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [showOnboarding, setShowOnboarding] = useState(false);


    useEffect(() => {
        const handleStravaCallback = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');
            const scope = urlParams.get('scope');

            if (code && scope?.includes('read') && auth.username) {
                try {
                    window.history.replaceState({}, document.title, window.location.pathname);
                    setToastMessage('Procesando autorización de Strava...');

                    const authResult = await exchangeStravaCode(code);
                    if (authResult.connected) {
                        setStravaAuth(auth.username, { connected: true });
                        // Dispatch custom event to notify other components like ProfilePage
                        window.dispatchEvent(new CustomEvent('stravaConnected'));
                        setCurrentView('profile'); 
                        setToastMessage('¡Conexión con Strava exitosa! Sincronizando actividades...');
                        
                        const newActivities = await fetchStravaActivities(auth.username);
                        setStravaActivities(auth.username, newActivities);
                        
                        setToastMessage('¡Actividades de Strava sincronizadas!');
                    } else {
                         throw new Error('Simulated token exchange failed');
                    }
                } catch (error) {
                    console.error('Strava callback handling failed:', error);
                    setToastMessage('Error al conectar con Strava.');
                } finally {
                    setTimeout(() => setToastMessage(null), 3000);
                }
            }
        };

        handleStravaCallback();
    }, [auth.username]);

    const handleLoginSuccess = (username: string) => {
        setAuth(username);
        setAuthData({ isAuthenticated: true, username });
        if (!getOnboardingStatus(username)) {
            setShowOnboarding(true);
        }
    };
    
    const handleLogout = () => {
        if (auth.username) {
            // Optional: Ask user if they want to clear their Strava data as well
            // For now, we keep it so they don't have to reconnect on next login
        }
        clearAuth();
        setAuthData({ isAuthenticated: false, username: null });
        setCurrentView('workouts'); // Reset to default view
    };


    const handleOnboardingComplete = () => {
        if (auth.username) {
            setOnboardingStatus(auth.username);
        }
        setShowOnboarding(false);
    };

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
    };

    const toggleCalendar = () => {
        setCalendarOpen(!isCalendarOpen);
    };
    
    const handleNavigate = (view: 'workouts' | 'tests' | 'profile') => {
        setCurrentView(view);
    };

    const selectedWorkout: Workout | undefined = useMemo(() => {
        const dateStr = formatDate(selectedDate);
        return trainingData[dateStr];
    }, [selectedDate]);

    const handleShareWorkout = async () => {
        if (!selectedWorkout) return;

        const workoutText = formatWorkoutForSharing(selectedWorkout);
        const shareData = {
            title: `Hyrox Workout: ${selectedWorkout.title}`,
            text: workoutText,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.error('Error sharing workout:', err);
            }
        } else {
            try {
                await navigator.clipboard.writeText(workoutText);
                setToastMessage('Workout copied to clipboard!');
                setTimeout(() => setToastMessage(null), 3000);
            } catch (err) {
                console.error('Failed to copy workout to clipboard:', err);
                setToastMessage('Failed to copy workout.');
                setTimeout(() => setToastMessage(null), 3000);
            }
        }
    };

    const renderCurrentView = () => {
        switch (currentView) {
            case 'workouts':
                return (
                    <>
                        <div className="p-4 max-w-4xl mx-auto">
                            <div className="flex justify-end items-center mb-4 space-x-2">
                                <button onClick={handleShareWorkout} className="p-2 rounded-full hover:bg-gray-800 transition-colors" aria-label="Share workout">
                                    <ShareIcon />
                                </button>
                                <button onClick={toggleCalendar} className="p-2 rounded-full hover:bg-gray-800 transition-colors" aria-label="Open calendar">
                                    <CalendarIcon />
                                </button>
                            </div>
                            <WeekNav selectedDate={selectedDate} onDateSelect={handleDateSelect} trainingData={trainingData} />

                           <div className="workout-title my-5 text-left border-2 border-amber-400 p-4 sm:p-5 rounded-lg bg-gray-900/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <h2 className="text-amber-400 font-bold text-md sm:text-lg leading-tight">
                                        {selectedWorkout ? 
                                        `${selectedWorkout.week} - Día ${selectedWorkout.day}`
                                        : 'Día de entrenamiento'}
                                    </h2>
                                    <h3 className="text-white mt-1 text-sm sm:text-base">
                                        {selectedWorkout ? selectedWorkout.title : 'No hay entrenamiento programado'}
                                    </h3>
                                </div>
                            </div>


                            <Glossary />
                            
                            <WorkoutDetails workout={selectedWorkout} />
                        </div>

                        <CalendarModal
                            isOpen={isCalendarOpen}
                            onClose={toggleCalendar}
                            selectedDate={selectedDate}
                            onDateSelect={(date) => {
                                handleDateSelect(date);
                                toggleCalendar();
                            }}
                        />
                    </>
                );
            case 'tests':
                return <TestsPage />;
            case 'profile':
                return auth.username ? <ProfilePage username={auth.username} /> : null;
            default:
                return null;
        }
    };

    if (!auth.isAuthenticated) {
        return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
    }
    
    if (showOnboarding && auth.username) {
        return <OnboardingGuide username={auth.username} onFinish={handleOnboardingComplete} />;
    }

    return (
        <div className="text-white min-h-screen font-sans">
            <Header currentView={currentView} onNavigate={handleNavigate} onLogout={handleLogout} />
            
            <main className="pt-16 sm:pt-20">
                {renderCurrentView()}
                 {toastMessage && (
                    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-gray-800 text-white py-2 px-5 rounded-lg shadow-lg border border-amber-400 animate-toast z-50">
                        {toastMessage}
                    </div>
                )}
            </main>
        </div>
    );
};

export default App;