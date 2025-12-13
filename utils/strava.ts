import type { StravaActivity, StravaAuth } from '../types';

// --- Client-Side Strava OAuth ---

// The Client ID provided by the user in a previous request.
const STRAVA_CLIENT_ID = '184560';

/**
 * Constructs the full Strava authorization URL for the client-side flow.
 */
export const getStravaAuthUrl = (): string => {
    const redirectUri = window.location.origin + window.location.pathname;
    const params = new URLSearchParams({
        client_id: STRAVA_CLIENT_ID,
        response_type: 'code',
        redirect_uri: redirectUri,
        approval_prompt: 'auto',
        scope: 'read,activity:read_all', // Request read permissions
    });
    return `https://www.strava.com/oauth/authorize?${params.toString()}`;
};

/**
 * Simulates exchanging the authorization code for an access token.
 * @param {string} code - The authorization code from Strava's redirect.
 * @returns {Promise<StravaAuth>} - A promise that resolves to a simulated auth object.
 */
export const exchangeStravaCode = async (code: string): Promise<StravaAuth> => {
    console.log("Simulating token exchange with code:", code);
    await new Promise(resolve => setTimeout(resolve, 500));
    return { connected: true };
};


// --- Data Processing ---

/**
 * Formats a duration in total seconds into a "mm:ss" pace string.
 * @param secondsPerKm - The number of seconds to run one kilometer.
 */
export const formatPace = (secondsPerKm: number): string => {
    if (isNaN(secondsPerKm) || !isFinite(secondsPerKm) || secondsPerKm <= 0) {
        return '00:00';
    }
    const minutes = Math.floor(secondsPerKm / 60);
    const seconds = Math.round(secondsPerKm % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

/**
 * Fetches Strava activities from a local mock data file.
 */
export const fetchStravaActivities = async (username: string): Promise<StravaActivity[]> => {
    console.log(`Fetching Strava activities for ${username}...`);
    
    const endpoint = '/strava-runs.json'; 

    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
    
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const rawActivities = await response.json();

        const processedRuns: StravaActivity[] = rawActivities
            .filter((activity: any) => activity.type === 'Run')
            .map((activity: any) => ({
                actividad_id: activity.id,
                name: activity.name,
                fecha: activity.start_date,
                distancia: activity.distance / 1000, // to km
                tiempo: activity.moving_time / 60, // to minutes
                frecuencia_media: activity.average_heartrate || null,
            }))
            .sort((a: StravaActivity, b: StravaActivity) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
        
        console.log("Processed runs:", processedRuns);
        return processedRuns;

    } catch (error) {
        console.error("Failed to fetch or process Strava data:", error);
        return [];
    }
};


/**
 * Calculates monthly running statistics from a list of activities.
 */
export const calculateMonthlyStats = (activities: StravaActivity[]) => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const thisMonthActivities = activities.filter(activity => {
        const activityDate = new Date(activity.fecha);
        return activityDate.getMonth() === currentMonth && activityDate.getFullYear() === currentYear;
    });

    if (thisMonthActivities.length === 0) {
        return { totalDistance: 0, avgPace: '00:00', runCount: 0 };
    }

    const totalDistance = thisMonthActivities.reduce((sum, act) => sum + act.distancia, 0);
    const totalSeconds = thisMonthActivities.reduce((sum, act) => sum + (act.tiempo * 60), 0);
    const avgPaceSeconds = totalDistance > 0 ? totalSeconds / totalDistance : 0;

    return {
        totalDistance,
        avgPace: formatPace(avgPaceSeconds),
        runCount: thisMonthActivities.length,
    };
};
