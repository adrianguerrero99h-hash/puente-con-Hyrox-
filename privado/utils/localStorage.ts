import type { StravaAuth, StravaActivity } from '../types';

const AUTH_KEY = 'hyrox_auth';
const ONBOARDING_KEY_PREFIX = 'hyrox_onboarding_';
const STRAVA_AUTH_KEY_PREFIX = 'strava_auth_';
const STRAVA_ACTIVITIES_KEY_PREFIX = 'strava_activities_';


export interface AuthData {
    isAuthenticated: boolean;
    username: string | null;
}

export const getAuth = (): AuthData => {
    try {
        const data = localStorage.getItem(AUTH_KEY);
        return data ? JSON.parse(data) : { isAuthenticated: false, username: null };
    } catch (error) {
        console.error("Failed to parse auth data from localStorage", error);
        return { isAuthenticated: false, username: null };
    }
};

export const setAuth = (username: string): void => {
    const data: AuthData = { isAuthenticated: true, username };
    localStorage.setItem(AUTH_KEY, JSON.stringify(data));
};

export const clearAuth = (): void => {
    localStorage.removeItem(AUTH_KEY);
};

export const getOnboardingStatus = (username: string): boolean => {
    return localStorage.getItem(`${ONBOARDING_KEY_PREFIX}${username}`) === 'true';
};

export const setOnboardingStatus = (username: string): void => {
    localStorage.setItem(`${ONBOARDING_KEY_PREFIX}${username}`, 'true');
};

// --- User-Specific Strava LocalStorage Utils ---

export const getStravaAuth = (username: string): StravaAuth | null => {
    try {
        const data = localStorage.getItem(`${STRAVA_AUTH_KEY_PREFIX}${username}`);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error("Failed to parse Strava auth data", error);
        return null;
    }
};

export const setStravaAuth = (username: string, authData: StravaAuth): void => {
    localStorage.setItem(`${STRAVA_AUTH_KEY_PREFIX}${username}`, JSON.stringify(authData));
};

export const getStravaActivities = (username: string): StravaActivity[] => {
    try {
        const data = localStorage.getItem(`${STRAVA_ACTIVITIES_KEY_PREFIX}${username}`);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error("Failed to parse Strava activities", error);
        return [];
    }
};

export const setStravaActivities = (username: string, activities: StravaActivity[]): void => {
    localStorage.setItem(`${STRAVA_ACTIVITIES_KEY_PREFIX}${username}`, JSON.stringify(activities));
};

export const clearStravaData = (username: string): void => {
    localStorage.removeItem(`${STRAVA_AUTH_KEY_PREFIX}${username}`);
    localStorage.removeItem(`${STRAVA_ACTIVITIES_KEY_PREFIX}${username}`);
};
