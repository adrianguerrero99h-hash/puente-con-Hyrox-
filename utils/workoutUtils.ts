import type { Workout } from '../types';

/**
 * Helper function to determine if a day is exclusively for running.
 * A day is considered a "running day" if it contains running-related keywords
 * and does not contain keywords for other types of exercises (gym, ergometers, etc.).
 */
export const isExclusivelyRunningDay = (workout: Workout | undefined): boolean => {
    if (!workout || workout.restDay) {
        return false;
    }

    const allText = [
        workout.title,
        workout.notes || '',
        ...workout.sections.flatMap(s => [
            s.title,
            s.notes || '',
            ...s.exercises.flatMap(e => [e.title, e.notes || '', ...e.items])
        ])
    ].join(' ').toUpperCase();

    const runningKeywords = ['RUN', 'CARRERA', 'RODAJE', 'VAM'];
    
    // Keywords for other activities
    const nonRunningKeywords = [
        'SKI', 'ROW', 'BIKE', 'ASSAULT', 'SQUAT', 'PULL UP', 'PRESS', 'RDL', 'THRUSTER', 
        'REMO', 'SLED', 'WALL BALL', 'BURPEE', 'LUNGE', 'CARRY', 'DEADLIFT', 'PESO MUERTO',
        'CLEAN', 'SNATCH', 'PUSH UP', 'CHIN UP', 'DEVIL PRESS', 'BOX JUMP', 'SWING', 'DL', 'DU', 'SU', 'ERG'
    ];

    const hasRunning = runningKeywords.some(keyword => allText.includes(keyword));

    // A simple `includes` check is sufficient and more performant than regex for this list.
    const hasNonRunning = nonRunningKeywords.some(keyword => allText.includes(keyword));

    return hasRunning && !hasNonRunning;
};


/**
 * Formats a workout object into a shareable plain text string.
 */
export const formatWorkoutForSharing = (workout: Workout): string => {
    if (workout.restDay) {
        return `${workout.title}\n\n🛌 DÍA DE DESCANSO OBLIGATORIO`;
    }

    let content = `${workout.week} - Día ${workout.day}\n`;
    content += `${workout.title}\n\n`;

    workout.sections.forEach(section => {
        content += `--- ${section.letter}: ${section.title} ---\n\n`;
        section.exercises.forEach(exercise => {
            if (exercise.title) {
                content += `${exercise.title}\n`;
            }
            exercise.items.forEach(item => {
                content += `• ${item}\n`;
            });
            content += '\n';
        });
        if (section.notes) {
            content += `Notas: ${section.notes}\n\n`;
        }
    });
     if (workout.notes) {
        content += `\n--- NOTAS GENERALES ---\n${workout.notes}\n`;
    }

    return content.trim();
};