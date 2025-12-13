import React, { useState, useEffect } from 'react';
import { noMaterialProgramData } from '../data/noMaterialProgramData';
import WorkoutDetails from './WorkoutDetails';
import type { Workout } from '../types';

interface NoMaterialProgramModalProps {
    onClose: () => void;
}

const NoMaterialProgramModal: React.FC<NoMaterialProgramModalProps> = ({ onClose }) => {
    const [selectedWeek, setSelectedWeek] = useState(1);
    const [selectedDay, setSelectedDay] = useState(1);
    const [selectedWorkout, setSelectedWorkout] = useState<Workout>(noMaterialProgramData[0]);

    useEffect(() => {
        const workoutIndex = (selectedWeek - 1) * 7 + (selectedDay - 1);
        setSelectedWorkout(noMaterialProgramData[workoutIndex]);
    }, [selectedWeek, selectedDay]);
    
     useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const DayButton: React.FC<{ day: number }> = ({ day }) => {
        const isActive = day === selectedDay;
        return (
            <button
                onClick={() => setSelectedDay(day)}
                className={`flex-1 p-2 text-center rounded-md text-xs sm:text-sm font-bold transition-colors ${
                    isActive ? 'bg-amber-400 text-black' : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
            >
                Día {day}
            </button>
        );
    };

    return (
        <div 
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-2 sm:p-4 animate-fade-in-fast"
            onClick={onClose}
        >
            <div 
                className="bg-gray-900 border-2 border-amber-400 rounded-lg w-full max-w-4xl h-[95vh] flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                <header className="flex items-center p-3 sm:p-4 border-b-2 border-gray-700">
                    <h2 className="flex-1 text-base sm:text-xl font-bold text-amber-400">Programa 2 Semanas Sin Material</h2>
                    <button onClick={onClose} className="text-white text-3xl hover:text-amber-400 transition-colors">&times;</button>
                </header>
                
                <div className="p-3 sm:p-4">
                    <div className="flex bg-gray-800 rounded-lg p-1 mb-4">
                        <button 
                            onClick={() => setSelectedWeek(1)}
                            className={`flex-1 p-2 rounded-md font-bold transition-colors ${selectedWeek === 1 ? 'bg-amber-400 text-black' : 'text-white'}`}
                        >
                            Semana 1
                        </button>
                         <button 
                            onClick={() => setSelectedWeek(2)}
                            className={`flex-1 p-2 rounded-md font-bold transition-colors ${selectedWeek === 2 ? 'bg-amber-400 text-black' : 'text-white'}`}
                        >
                            Semana 2
                        </button>
                    </div>
                    
                    <div className="flex justify-between gap-1 sm:gap-2">
                        {[...Array(7)].map((_, i) => <DayButton key={i} day={i+1} />)}
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-3 sm:p-4">
                     <div className="workout-title my-2 text-left border-2 border-amber-400 p-4 rounded-lg bg-gray-800/50">
                        <h2 className="text-amber-400 font-bold text-md sm:text-lg leading-tight">
                            {selectedWorkout.week} - Día {selectedWorkout.day}
                        </h2>
                        <h3 className="text-white mt-1 text-sm sm:text-base">
                            {selectedWorkout.title}
                        </h3>
                    </div>
                    <WorkoutDetails workout={selectedWorkout} />
                </div>
            </div>
        </div>
    );
};

export default NoMaterialProgramModal;
