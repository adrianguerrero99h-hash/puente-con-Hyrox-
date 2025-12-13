export interface Exercise {
    title: string;
    items: string[];
    notes?: string;
}

export interface WorkoutSection {
    letter: string;
    title: string;
    exercises: Exercise[];
    notes?: string;
}

export interface Workout {
    week: string;
    day: number;
    title: string;
    sections: WorkoutSection[];
    restDay?: boolean;
    notes?: string;
}

export type TrainingData = {
    [date: string]: Workout;
};

// Strava specific types

/**
 * Represents the status of the Strava connection for a user.
 * We no longer store tokens on the client for security reasons.
 * This object simply acts as a flag that the user has successfully connected via the backend.
 */
export interface StravaAuth {
    connected: true;
}

/**
 * Aligned with the Supabase schema for `strava_activities`.
 * Note: `usuario_id` is managed by the backend and database, so it's not needed in the frontend type.
 * `name` is added back for display purposes, assuming the backend will provide it.
 */
export interface StravaActivity {
    actividad_id: number;
    name: string; // Provided by backend for display
    fecha: string; // ISO string date
    distancia: number; // in km
    tiempo: number; // in minutes
    frecuencia_media: number | null;
}