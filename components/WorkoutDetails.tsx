
import React from 'react';
import type { Workout } from '../types';
import WorkoutSection from './WorkoutSection';

interface WorkoutDetailsProps {
    workout: Workout | undefined;
}

const WorkoutDetails: React.FC<WorkoutDetailsProps> = ({ workout }) => {
    if (!workout) {
        return (
            <div className="bg-gray-900 border-2 border-gray-700 rounded-lg p-10 text-center">
                <p className="text-lg text-amber-400">📅 Selecciona otro día del calendario</p>
            </div>
        );
    }

    if (workout.restDay) {
        return (
            <div className="bg-gray-900 border-2 border-gray-700 rounded-lg p-10 text-center">
                <p className="text-xl font-bold text-amber-400">🛌 DÍA DE DESCANSO OBLIGATORIO</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {workout.sections.map((section, index) => (
                <WorkoutSection key={index} section={section} />
            ))}
        </div>
    );
};

export default WorkoutDetails;
