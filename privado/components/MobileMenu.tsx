import React from 'react';
import CloseIcon from './icons/CloseIcon';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    currentView: 'workouts' | 'tests' | 'profile';
    onNavigate: (view: 'workouts' | 'tests' | 'profile') => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, currentView, onNavigate }) => {
    if (!isOpen) return null;

    const handleNavigation = (view: 'workouts' | 'tests' | 'profile') => {
        onNavigate(view);
        onClose();
    };

    const NavButton: React.FC<{ view: 'workouts' | 'tests' | 'profile'; label: string }> = ({ view, label }) => (
        <button
            onClick={() => handleNavigation(view)}
            className={`font-black text-3xl tracking-widest uppercase transition-colors duration-200 ${currentView === view ? 'text-amber-400' : 'text-white hover:text-amber-400'}`}
        >
            {label}
        </button>
    );

    return (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center animate-fade-in-fast" onClick={onClose}>
            <button onClick={onClose} className="absolute top-6 right-6 p-2" aria-label="Close menu">
                <CloseIcon />
            </button>
            <nav className="flex flex-col items-center space-y-8 text-center">
                <NavButton view="workouts" label="ENTRENAMIENTOS" />
                <NavButton view="tests" label="TEST & ERGS" />
                <NavButton view="profile" label="PERFIL" />
            </nav>
        </div>
    );
};

export default MobileMenu;
