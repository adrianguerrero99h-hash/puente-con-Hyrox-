
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