import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import WeekNav from './components/WeekNav';
import Glossary from './components/Glossary';
import WorkoutDetails from './components/WorkoutDetails';
import CalendarModal from './components/CalendarModal';
import type { Workout, TrainingData } from './types';
import { formatDate, isSummerRestPeriod } from './utils/date';
import { formatWorkoutForSharing } from './utils/workoutUtils';
import TestsPage from './components/TestsPage';
import LoginScreen from './components/LoginScreen';
import CalendarIcon from './components/icons/CalendarIcon';
import ShareIcon from './components/icons/ShareIcon';
import { getAuth, setAuth, clearAuth, getOnboardingStatus, setOnboardingStatus, type AuthData } from './utils/localStorage';
import OnboardingGuide from './components/OnboardingGuide';
import NoMaterialProgramBanner from './components/NoMaterialProgramBanner';
import NoMaterialProgramModal from './components/NoMaterialProgramModal';

const App: React.FC = () => {
    const [auth, setAuthData] = useState<AuthData>(getAuth);
    const [currentView, setCurrentView] = useState<'workouts' | 'tests'>('workouts');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isCalendarOpen, setCalendarOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [showOnboarding, setShowOnboarding] = useState(false);
    const [isNoMaterialModalOpen, setNoMaterialModalOpen] = useState(false);
    const [trainingData, setTrainingData] = useState<TrainingData | null>(null);

    useEffect(() => {
        import('./constants').then(module => {
            setTrainingData(module.trainingData);
        });
    }, []);

    const handleLoginSuccess = (username: string) => {
        setAuth(username);
        setAuthData({ isAuthenticated: true, username });
        if (!getOnboardingStatus(username)) {
            setShowOnboarding(true);
        }
    };
    
    const handleLogout = () => {
        clearAuth();
        setAuthData({ isAuthenticated: false, username: null });
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
    
    const handleNavigate = (view: 'workouts' | 'tests') => {
        setCurrentView(view);
    };

    const isSummerPeriod = useMemo(() => {
        return isSummerRestPeriod(selectedDate);
    }, [selectedDate]);

    const selectedWorkout: Workout | undefined = useMemo(() => {
        if (!trainingData) return undefined;
        const dateStr = formatDate(selectedDate);
        return trainingData[dateStr];
    }, [selectedDate, trainingData]);

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

    if (!auth.isAuthenticated) {
        return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
    }
    
    if (showOnboarding && auth.username) {
        return <OnboardingGuide username={auth.username} onFinish={handleOnboardingComplete} />;
    }

    if (!trainingData) {
        return (
            <div className="bg-[#0c0c0c] text-white min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-amber-400 text-lg animate-pulse">Cargando programa de entrenamiento...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#0c0c0c] text-white min-h-screen font-sans">
            <Header currentView={currentView} onNavigate={handleNavigate} onLogout={handleLogout} />
            
            <main className="pt-16 sm:pt-20"> {/* Padding top to offset sticky header */}
                {currentView === 'workouts' ? (
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

                            {isSummerPeriod && <NoMaterialProgramBanner onDoubleClick={() => setNoMaterialModalOpen(true)} />}

                            <WeekNav selectedDate={selectedDate} onDateSelect={handleDateSelect} trainingData={trainingData} />

                            <div className="workout-title my-5 text-left border-2 border-amber-400 p-4 sm:p-5 rounded-lg bg-gray-900/50">
                                <h2 className="text-amber-400 font-bold text-md sm:text-lg leading-tight">
                                    {selectedWorkout ? 
                                    `${selectedWorkout.week} - Día ${selectedWorkout.day}`
                                    : 'Día de entrenamiento'}
                                </h2>
                                <h3 className="text-white mt-1 text-sm sm:text-base">
                                    {selectedWorkout ? selectedWorkout.title : 'No hay entrenamiento programado'}
                                </h3>
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
                            trainingData={trainingData}
                        />

                        {isNoMaterialModalOpen && <NoMaterialProgramModal onClose={() => setNoMaterialModalOpen(false)} />}
                        
                        {toastMessage && (
                            <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-gray-800 text-white py-2 px-5 rounded-lg shadow-lg border border-amber-400 animate-toast z-50">
                                {toastMessage}
                            </div>
                        )}
                    </>
                ) : (
                    <TestsPage />
                )}
            </main>
        </div>
    );
};

export default App;