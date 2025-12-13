import React, { useState, useMemo, useEffect } from 'react';
import StravaIcon from './icons/StravaIcon';
import SyncIcon from './icons/SyncIcon';
import { getStravaAuth, getStravaActivities, setStravaActivities, clearStravaData } from '../utils/localStorage';
import { fetchStravaActivities, calculateMonthlyStats, formatPace, getStravaAuthUrl } from '../utils/strava';
import type { StravaActivity } from '../types';

interface ProfilePageProps {
    username: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ username }) => {
    const [stravaAuth, setStravaAuth] = useState(() => getStravaAuth(username));
    const [activities, setActivities] = useState<StravaActivity[]>(() => getStravaActivities(username));
    const [isSyncing, setIsSyncing] = useState(false);
    
    useEffect(() => {
       const handleStorageChange = () => {
            setStravaAuth(getStravaAuth(username));
            setActivities(getStravaActivities(username));
       };
       window.addEventListener('storage', handleStorageChange);
       
       const handleStravaConnected = () => {
           handleStorageChange();
       };
       window.addEventListener('stravaConnected', handleStravaConnected);

       return () => {
           window.removeEventListener('storage', handleStorageChange);
           window.removeEventListener('stravaConnected', handleStravaConnected);
       };
    }, [username]);


    const monthlyStats = useMemo(() => calculateMonthlyStats(activities), [activities]);

    const handleConnect = () => {
        const authUrl = getStravaAuthUrl();
        window.top.location.href = authUrl;
    };

    const handleDisconnect = () => {
        if (window.confirm('¿Estás seguro de que quieres desconectar de Strava? Se borrarán tus actividades sincronizadas.')) {
            clearStravaData(username);
            setStravaAuth(null);
            setActivities([]);
        }
    };
    
    const handleSync = async () => {
        setIsSyncing(true);
        try {
            const newActivities = await fetchStravaActivities(username);
            setStravaActivities(username, newActivities);
            setActivities(newActivities);
        } catch (error) {
            console.error("Failed to sync Strava activities:", error);
        } finally {
            setIsSyncing(false);
        }
    };
    
    return (
        <div className="p-4 sm:p-6 max-w-4xl mx-auto text-white animate-fade-in-fast">
            <div className="text-center mb-10">
                <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tighter mb-2">Perfil y Conexiones</h1>
                <p className="text-gray-400">Gestiona tu cuenta y las conexiones con otras aplicaciones.</p>
            </div>

            <div className="bg-gray-900/50 border-2 border-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-bold text-amber-400 mb-4 pb-4 border-b border-gray-700">Conexiones de Aplicaciones</h2>
                
                <div className="bg-gray-900/70 p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <span className="text-[#FC4C02]"><StravaIcon className="w-10 h-10" /></span>
                        <div>
                            <p className="font-bold text-white">Strava</p>
                            <p className="text-sm text-gray-400">Sincroniza tus actividades de Strava.</p>
                        </div>
                    </div>
                    
                    {!stravaAuth?.connected ? (
                        <button 
                            onClick={handleConnect}
                            className="bg-[#FC4C02] text-white font-bold py-2 px-5 rounded-lg hover:bg-orange-600 transition-colors inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                        >
                            <StravaIcon className="w-5 h-5" />
                            Conectar con Strava
                        </button>
                    ) : (
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-semibold text-green-400 bg-green-900/50 px-3 py-1 rounded-full border border-green-700">Conectado</span>
                             <button onClick={handleDisconnect} className="text-xs text-gray-400 hover:text-red-500 hover:underline">
                                Desconectar
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {stravaAuth?.connected && (
                <div className="mt-8">
                     {/* Monthly Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                        <StatCard title="Distancia este mes" value={`${monthlyStats.totalDistance.toFixed(2)} km`} />
                        <StatCard title="Ritmo promedio" value={monthlyStats.avgPace} />
                        <StatCard title="Carreras este mes" value={String(monthlyStats.runCount)} />
                    </div>

                    {/* Actions and Activity List */}
                    <div className="bg-gray-900/50 border-2 border-gray-800 rounded-lg p-6">
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                             <h2 className="text-xl font-bold text-amber-400 mb-4 sm:mb-0">Historial de Carreras</h2>
                            <button 
                                onClick={handleSync}
                                disabled={isSyncing}
                                className="bg-gray-700 text-white font-bold py-2 px-5 rounded-lg hover:bg-gray-600 transition-colors inline-flex items-center gap-2 disabled:opacity-50"
                            >
                                <SyncIcon className={isSyncing ? 'animate-spin' : ''} />
                                {isSyncing ? 'Sincronizando...' : 'Sincronizar'}
                            </button>
                        </div>

                        {activities.length > 0 ? (
                            <ul className="space-y-3">
                                {activities.map(activity => (
                                    <ActivityItem key={activity.actividad_id} activity={activity} />
                                ))}
                            </ul>
                        ) : (
                            <p className="text-center text-gray-500 py-8">No hay actividades sincronizadas. Pulsa "Sincronizar" para empezar.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

const StatCard: React.FC<{ title: string; value: string }> = ({ title, value }) => (
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 text-center">
        <p className="text-sm text-gray-400 uppercase tracking-wider">{title}</p>
        <p className="text-2xl font-bold text-amber-400 mt-1">{value}</p>
    </div>
);

const ActivityItem: React.FC<{ activity: StravaActivity }> = ({ activity }) => {
    // Calculate pace on the fly for display
    const paceSeconds = activity.distancia > 0 ? (activity.tiempo * 60) / activity.distancia : 0;
    const displayPace = formatPace(paceSeconds);

    return (
     <li className="bg-gray-800 p-4 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-gray-700">
        <div className="flex-grow">
            <p className="font-bold text-white">{activity.name}</p>
            <p className="text-xs text-gray-400">{new Date(activity.fecha).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        <div className="grid grid-cols-2 sm:flex sm:gap-6 text-center text-sm">
            <div className="sm:w-24 mb-2 sm:mb-0">
                <p className="text-gray-400">Distancia</p>
                <p className="font-mono text-white">{activity.distancia.toFixed(2)} km</p>
            </div>
             <div className="sm:w-24 mb-2 sm:mb-0">
                <p className="text-gray-400">Ritmo</p>
                <p className="font-mono text-white">{displayPace}/km</p>
            </div>
             <div className="sm:w-24">
                <p className="text-gray-400">FC Media</p>
                <p className="font-mono text-white">{activity.frecuencia_media ? Math.round(activity.frecuencia_media) : 'N/A'}</p>
            </div>
        </div>
    </li>
    );
};

export default ProfilePage;