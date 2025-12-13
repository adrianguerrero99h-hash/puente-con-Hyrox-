import React, { useMemo } from 'react';
import { formatDate, getMonday } from '../utils/date';
import { isExclusivelyRunningDay } from '../utils/workoutUtils';
import type { TrainingData } from '../types';

interface WeekNavProps {
    selectedDate: Date;
    onDateSelect: (date: Date) => void;
    trainingData: TrainingData;
}

const WeekNav: React.FC<WeekNavProps> = ({ selectedDate, onDateSelect, trainingData }) => {
    const weekDays = useMemo(() => {
        const monday = getMonday(selectedDate);
        const days = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(monday);
            date.setDate(monday.getDate() + i);
            days.push(date);
        }
        return days;
    }, [selectedDate]);

    const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    return (
        <div className="flex justify-between items-stretch gap-1 sm:gap-2 pb-3">
            {weekDays.map((date, index) => {
                const dateString = formatDate(date);
                const isActive = dateString === formatDate(selectedDate);
                const workout = trainingData[dateString];
                
                const isRunDay = isExclusivelyRunningDay(workout);

                let dayCardClasses = 'flex-1 p-1 sm:p-2 text-center border-2 rounded-lg cursor-pointer transition-colors duration-200 flex flex-col justify-center items-center';
                
                let baseBgClass = 'bg-black';
                let baseBorderClass = 'border-gray-700';

                if (workout?.restDay) {
                    baseBgClass = 'bg-green-900';
                    baseBorderClass = 'border-green-600';
                } else if (isRunDay) {
                    baseBgClass = 'bg-orange-800';
                    baseBorderClass = 'border-orange-600';
                }

                if (isActive) {
                    baseBorderClass = 'border-amber-400';
                }
                
                dayCardClasses += ` ${baseBgClass} ${baseBorderClass}`;

                if (!isActive && !workout?.restDay && !isRunDay) {
                     dayCardClasses += ' hover:border-amber-400';
                }


                return (
                    <button
                        key={date.toISOString()}
                        className={dayCardClasses}
                        onClick={() => onDateSelect(date)}
                    >
                        <div className="text-xs text-gray-400">{dayNames[index]}</div>
                        <div className="text-base sm:text-xl font-bold mt-1">{date.getDate()}</div>
                    </button>
                );
            })}
        </div>
    );
};

export default WeekNav;