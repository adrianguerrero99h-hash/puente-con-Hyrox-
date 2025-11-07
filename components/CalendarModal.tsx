import React, { useState, useEffect } from 'react';
import { formatDate, isSummerRestPeriod } from '../utils/date';
import { isExclusivelyRunningDay } from '../utils/workoutUtils';
import type { TrainingData, Workout } from '../types';

interface CalendarModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedDate: Date;
    onDateSelect: (date: Date) => void;
    trainingData: TrainingData;
}

const CalendarModal: React.FC<CalendarModalProps> = ({ isOpen, onClose, selectedDate, onDateSelect, trainingData }) => {
    const [displayDate, setDisplayDate] = useState(new Date(selectedDate));

    useEffect(() => {
        setDisplayDate(new Date(selectedDate));
    }, [selectedDate, isOpen]);

    const changeMonth = (direction: number) => {
        setDisplayDate(prev => {
            const newDate = new Date(prev);
            newDate.setMonth(newDate.getMonth() + direction);
            return newDate;
        });
    };

    const renderCalendarGrid = () => {
        const year = displayDate.getFullYear();
        const month = displayDate.getMonth();
        
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        
        const firstDayIndex = (firstDay.getDay() + 6) % 7; // 0=Mon, 6=Sun
        const lastDate = lastDay.getDate();

        const prevMonthLastDay = new Date(year, month, 0);
        const prevMonthLastDate = prevMonthLastDay.getDate();

        const grid = [];

        const getWorkoutForDate = (date: Date): Workout | undefined => {
            if (!trainingData) return undefined;
            return trainingData[formatDate(date)];
        }
        
        // Days from previous month
        for (let i = firstDayIndex; i > 0; i--) {
            const day = prevMonthLastDate - i + 1;
            const date = new Date(year, month - 1, day);
            grid.push(<DayCell key={`prev-${day}`} date={date} workout={getWorkoutForDate(date)} isOtherMonth onSelect={onDateSelect} />);
        }
        
        // Days from current month
        for (let day = 1; day <= lastDate; day++) {
            const date = new Date(year, month, day);
            grid.push(<DayCell key={`curr-${day}`} date={date} workout={getWorkoutForDate(date)} isSelected={formatDate(date) === formatDate(selectedDate)} onSelect={onDateSelect} />);
        }
        
        // Days from next month
        const nextMonthDays = 42 - grid.length;
        for (let day = 1; day <= nextMonthDays; day++) {
            const date = new Date(year, month + 1, day);
            grid.push(<DayCell key={`next-${day}`} date={date} workout={getWorkoutForDate(date)} isOtherMonth onSelect={onDateSelect} />);
        }

        return grid;
    };
    
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in-fast" onClick={onClose}>
            <div className="bg-gray-900 border-2 border-amber-400 rounded-2xl p-4 md:p-6 w-full max-w-md mx-auto" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-amber-400 text-3xl">&times;</button>
                <div className="flex justify-between items-center mb-4">
                    <button onClick={() => changeMonth(-1)} className="text-amber-400 text-3xl p-2">‹</button>
                    <h3 className="text-amber-400 font-bold text-base sm:text-lg">
                        {displayDate.toLocaleString('es-ES', { month: 'long', year: 'numeric' })}
                    </h3>
                    <button onClick={() => changeMonth(1)} className="text-amber-400 text-3xl p-2">›</button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                    {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map(day => (
                        <div key={day} className="font-bold text-gray-500 text-xs sm:text-sm">{day}</div>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                    {renderCalendarGrid()}
                </div>
            </div>
        </div>
    );
};

interface DayCellProps {
    date: Date;
    workout: Workout | undefined;
    isSelected?: boolean;
    isOtherMonth?: boolean;
    onSelect: (date: Date) => void;
}

const DayCell: React.FC<DayCellProps> = ({ date, workout, isSelected, isOtherMonth, onSelect }) => {
    const isSummerBreak = isSummerRestPeriod(date);
    const isRunDay = !isSummerBreak && isExclusivelyRunningDay(workout);

    const baseClasses = "aspect-square flex items-center justify-center rounded-full cursor-pointer transition-colors duration-200 border";
    let stateClasses = "bg-gray-800 border-gray-800 hover:border-amber-400";

    if (isOtherMonth) {
        stateClasses = "text-gray-600 border-transparent hover:bg-gray-700";
    } else if (isRunDay) {
        stateClasses = 'bg-orange-800 border-orange-600 text-white hover:border-orange-400';
    }

    if (isSelected) {
        stateClasses = "bg-amber-400 text-black font-bold border-amber-400";
    }

    return (
        <div className={`${baseClasses} ${stateClasses}`} onClick={() => onSelect(date)}>
            {date.getDate()}
        </div>
    );
};

export default CalendarModal;