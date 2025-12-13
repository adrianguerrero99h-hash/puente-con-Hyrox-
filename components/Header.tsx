import React, { useState } from 'react';
import LogoutIcon from './icons/LogoutIcon';
import ProfileIcon from './icons/ProfileIcon';
import MenuIcon from './icons/MenuIcon';
import MobileMenu from './MobileMenu';

interface HeaderProps {
    currentView: 'workouts' | 'tests' | 'profile';
    onNavigate: (view: 'workouts' | 'tests' | 'profile') => void;
    onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, onLogout }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navItems = [
        { id: 'workouts', label: 'ENTRENAMIENTOS' },
        { id: 'tests', label: 'TEST & ERGS' },
    ] as const;

    return (
        <>
            <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm py-3 sm:py-4 px-4 sm:px-5 flex justify-between items-center border-b-2 border-amber-400 z-40 h-16 sm:h-20">
                <div>
                    <h1 className="text-xl sm:text-2xl font-black text-amber-400 leading-none tracking-tighter">HYROX</h1>
                </div>
                <div className="hidden sm:flex items-center space-x-2 sm:space-x-4">
                    <nav className="flex items-center space-x-2 sm:space-x-4">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => onNavigate(item.id)}
                                className={`font-bold text-xs sm:text-sm tracking-widest uppercase transition-colors duration-200 relative pb-1 ${
                                    currentView === item.id 
                                        ? 'text-amber-400' 
                                        : 'text-white hover:text-amber-400'
                                }`}
                            >
                                {item.label}
                                {currentView === item.id && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400"></span>}
                            </button>
                        ))}
                    </nav>
                    <div className="border-l border-gray-700 h-6"></div>
                    <button 
                        onClick={() => onNavigate('profile')} 
                        className={`p-2 rounded-full transition-colors ${currentView === 'profile' ? 'bg-amber-400/20' : 'hover:bg-gray-800'}`} 
                        aria-label="Perfil"
                    >
                        <ProfileIcon />
                    </button>
                    <button onClick={onLogout} className="p-2 rounded-full hover:bg-gray-800 transition-colors" aria-label="Cerrar sesión">
                        <LogoutIcon />
                    </button>
                </div>
                <div className="sm:hidden">
                    <button onClick={() => setMobileMenuOpen(true)} className="p-2 rounded-full hover:bg-gray-800 transition-colors" aria-label="Open menu">
                        <MenuIcon />
                    </button>
                </div>
            </header>
            <MobileMenu 
                isOpen={isMobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                currentView={currentView}
                onNavigate={onNavigate}
            />
        </>
    );
};

export default Header;