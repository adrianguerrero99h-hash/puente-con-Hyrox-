import React from 'react';
import LogoutIcon from './icons/LogoutIcon';

interface HeaderProps {
    currentView: 'workouts' | 'tests';
    onNavigate: (view: 'workouts' | 'tests') => void;
    onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, onLogout }) => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm py-3 sm:py-4 px-4 sm:px-5 flex justify-between items-center border-b-2 border-amber-400 z-40 h-16 sm:h-20">
            <div>
                <h1 className="text-xl sm:text-2xl font-black text-amber-400 leading-none tracking-tighter">HYROX</h1>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
                <nav className="flex items-center space-x-2 sm:space-x-4">
                    <button
                        onClick={() => onNavigate('workouts')}
                        className={`font-bold text-xs sm:text-sm tracking-widest uppercase transition-colors duration-200 relative pb-1 ${
                            currentView === 'workouts' 
                                ? 'text-amber-400' 
                                : 'text-white hover:text-amber-400'
                        }`}
                    >
                        ENTRENAMIENTOS
                        {currentView === 'workouts' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400"></span>}
                    </button>
                    <button
                        onClick={() => onNavigate('tests')}
                        className={`font-bold text-xs sm:text-sm tracking-widest uppercase transition-colors duration-200 relative pb-1 ${
                            currentView === 'tests' 
                                ? 'text-amber-400' 
                                : 'text-white hover:text-amber-400'
                        }`}
                    >
                        TEST & ERGS
                        {currentView === 'tests' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400"></span>}
                    </button>
                </nav>
                <div className="border-l border-gray-700 h-6"></div>
                <button onClick={onLogout} className="p-2 rounded-full hover:bg-gray-800 transition-colors" aria-label="Cerrar sesión">
                    <LogoutIcon />
                </button>
            </div>
        </header>
    );
};

export default Header;
