const AUTH_KEY = 'hyrox_auth';
const ONBOARDING_KEY_PREFIX = 'hyrox_onboarding_';

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
    const authData = getAuth();
    if(authData.username) {
        // We keep the onboarding status even after logout
        // so the user doesn't see it again on re-login.
    }
    localStorage.removeItem(AUTH_KEY);
};

export const getOnboardingStatus = (username: string): boolean => {
    return localStorage.getItem(`${ONBOARDING_KEY_PREFIX}${username}`) === 'true';
};

export const setOnboardingStatus = (username: string): void => {
    localStorage.setItem(`${ONBOARDING_KEY_PREFIX}${username}`, 'true');
};
