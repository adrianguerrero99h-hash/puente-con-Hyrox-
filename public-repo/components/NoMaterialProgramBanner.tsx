import React from 'react';
import SuitcaseIcon from './icons/SuitcaseIcon';

interface NoMaterialProgramBannerProps {
    onDoubleClick: () => void;
}

const NoMaterialProgramBanner: React.FC<NoMaterialProgramBannerProps> = ({ onDoubleClick }) => {
    return (
        <div 
            onDoubleClick={onDoubleClick}
            className="group mb-5 p-4 rounded-lg bg-gradient-to-r from-gray-800 via-gray-900 to-black border-2 border-amber-400 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
            title="Haz doble clic para abrir el programa"
        >
            <div className="flex items-center gap-4">
                <div className="text-amber-400 group-hover:animate-pulse">
                    <SuitcaseIcon />
                </div>
                <div className="flex-1">
                    <h4 className="font-bold text-white">¿De vacaciones? Programa de 2 semanas sin material</h4>
                    <p className="text-xs text-gray-400">Haz doble clic aquí para ver el plan de entrenamiento especial.</p>
                </div>
            </div>
        </div>
    );
};

export default NoMaterialProgramBanner;
