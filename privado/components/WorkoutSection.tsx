import React, { useState } from 'react';
import type { WorkoutSection as WorkoutSectionType } from '../types';

interface WorkoutSectionProps {
    section: WorkoutSectionType;
}

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

const ChevronUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
);

const WorkoutSection: React.FC<WorkoutSectionProps> = ({ section }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="bg-gray-900/50 border-2 border-gray-800 rounded-lg overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center p-4 bg-gray-900/70"
                aria-expanded={isOpen}
            >
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-amber-400 rounded-md font-black text-xl sm:text-2xl text-black">
                    {section.letter}
                </div>
                <h4 className="flex-1 ml-4 font-bold text-left uppercase text-white tracking-wide text-sm sm:text-base">
                    {section.title}
                </h4>
                <span className="text-white">
                    {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </span>
            </button>
            <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px]' : 'max-h-0'}`}>
                <div className="p-5 bg-transparent">
                    {section.exercises.map((exercise, index) => (
                        <div key={index} className="pb-5 mb-5 border-b border-gray-800 last:border-b-0 last:mb-0 last:pb-0">
                            {exercise.title && (
                                <h5 className="font-bold text-amber-400 mb-3">{exercise.title}</h5>
                            )}
                            <ul className="space-y-2 list-none">
                                {exercise.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="text-gray-300 flex text-sm leading-relaxed">
                                        <span className="text-amber-400 mr-3 mt-1 font-bold text-xs">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            {exercise.notes && (
                                <div className="mt-4 bg-amber-900/30 border-l-4 border-amber-400 p-4 rounded-r-md">
                                   <p className="text-sm text-gray-200"><strong className="text-amber-400">Notas:</strong> {exercise.notes}</p>
                                </div>
                            )}
                        </div>
                    ))}
                    {section.notes && (
                        <div className="mt-4 bg-amber-900/30 border-l-4 border-amber-400 p-4 rounded-r-md">
                           <p className="text-sm text-gray-200"><strong className="text-amber-400">Notas:</strong> {section.notes}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WorkoutSection;