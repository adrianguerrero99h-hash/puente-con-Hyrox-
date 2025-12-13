import React, { useState, useMemo, useEffect } from 'react';
import TestPageLayout from './TestPageLayout';
import { getSingleTestResult, saveSingleTestResult } from '../utils/testResults';

const TEST_ID = 'TestVAM';

// Helper function to format decimal minutes to mm:ss format
const formatPace = (decimalMinutes: number): string => {
    if (isNaN(decimalMinutes) || !isFinite(decimalMinutes)) {
        return '00:00';
    }
    const minutes = Math.floor(decimalMinutes);
    const seconds = Math.round((decimalMinutes - minutes) * 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const TestVAM: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [distance, setDistance] = useState<number | ''>('');

    useEffect(() => {
        const savedData = getSingleTestResult(TEST_ID);
        if (savedData && typeof savedData.distance === 'number') {
            setDistance(savedData.distance);
        }
    }, []);

    const handleSave = (newDistance: number | '') => {
        saveSingleTestResult(TEST_ID, { distance: newDistance });
        setDistance(newDistance);
        setIsEditing(false);
    };

    const calculations = useMemo(() => {
        if (typeof distance !== 'number' || distance <= 0) {
            return {
                totalKm: '0.00',
                avgPace: '00:00',
                zones: [
                    { name: 'Zona 1', pace: '00:00', color: 'bg-blue-500' },
                    { name: 'Zona 2', pace: '00:00', color: 'bg-green-500' },
                    { name: 'Zona 3', pace: '00:00', color: 'bg-yellow-500' },
                    { name: 'Zona 4', pace: '00:00', color: 'bg-orange-500' },
                    { name: 'Zona 5', pace: '00:00', color: 'bg-red-500' },
                ],
            };
        }

        const totalKm = (distance / 1000).toFixed(2);
        const vamKmh = (distance / 1000) / (6 / 60); // VAM in km/h
        const avgPaceDecimal = 60 / vamKmh;
        const avgPace = formatPace(avgPaceDecimal);

        const zonePercentages = {
            'Zona 1': 0.65,
            'Zona 2': 0.70,
            'Zona 3': 0.85,
            'Zona 4': 0.90,
            'Zona 5': 0.95,
        };
        
        const zoneColors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-orange-500', 'bg-red-500'];

        const zones = Object.entries(zonePercentages).map(([name, percentage], index) => {
            const zoneSpeed = vamKmh * percentage;
            const zonePaceDecimal = 60 / zoneSpeed;
            return {
                name,
                pace: formatPace(zonePaceDecimal),
                color: zoneColors[index],
            };
        });

        return { totalKm, avgPace, zones };

    }, [distance]);

    const InputForm = () => {
        const [inputValue, setInputValue] = useState<number | ''>(distance);
        return (
             <div className="border-2 border-gray-700 rounded-lg p-6">
                <h3 className="text-center text-amber-400 font-bold mb-4">Actualizar resultados</h3>
                <div className="bg-gray-800 p-3 rounded-md flex items-center justify-between gap-4 mb-3">
                    <label htmlFor="distance-input" className="text-blue-400 text-sm font-bold whitespace-nowrap">Distancia total en metros</label>
                    <input
                        id="distance-input"
                        type="number"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value === '' ? '' : parseInt(e.target.value, 10))}
                        placeholder="1500"
                        className="bg-transparent text-white text-lg font-mono w-full focus:outline-none text-right"
                    />
                </div>
                <div className="text-center mt-6">
                    <button
                        onClick={() => handleSave(inputValue)}
                        className="bg-amber-400 text-black font-bold py-2 px-8 rounded-lg hover:bg-amber-500 transition-colors"
                    >
                        Guardar
                    </button>
                </div>
            </div>
        );
    }

    return (
        <TestPageLayout onBack={onBack} title="Test VAM">
            {/* Description */}
            <div className="bg-gray-900/50 border-2 border-gray-800 rounded-lg p-6 mb-8 text-center">
                <h2 className="text-xl font-bold text-amber-400 mb-4">¿En que consiste el test VAM?</h2>
                <p className="text-gray-300 mb-4 max-w-3xl mx-auto">
                    El test VAM consiste en recorrer la máxima distancia posible corriendo durante 6 minutos a máxima velocidad.
                </p>
                <div className="text-left inline-block space-y-2 text-gray-200 text-sm">
                    <p>Recuerda calentar correctamente antes de comenzar.</p>
                    <p>No se trata de darlo todo al primer minuto y no poder completar los 6 minutos. Trata de mantener el máximo ritmo posible durante todo el test.</p>
                    <p>Una vez finalizado el test anota la distancia realizada para calcular tus zonas de trabajo.</p>
                    <p>Prepara tu pulsómetro GPS, calienta... ¡Y a por ello!</p>
                </div>
            </div>

            {/* Results Display */}
            <div className="border-2 border-gray-700 rounded-lg p-6 mb-8">
                <h3 className="text-center text-amber-400 font-bold mb-4">Zonas de entrenamiento</h3>
                <div className="flex justify-between items-center text-center mb-6 px-2">
                    <div>
                        <p className="text-gray-400 text-xs">Kilómetros totales</p>
                        <p className="text-white font-bold text-lg">{calculations.totalKm} km</p>
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs">Ritmo medio</p>
                        <p className="text-white font-bold text-lg">{calculations.avgPace} / km</p>
                    </div>
                </div>
                <div className="space-y-1">
                    {calculations.zones.map(zone => (
                        <div key={zone.name} className={`flex items-center p-2 rounded-md ${zone.color}`}>
                            <span className="w-1/4 font-bold text-black">{zone.name}</span>
                            <div className="flex-1 h-1 bg-black/20 mx-4 rounded-full"></div>
                            <span className="font-mono font-bold text-black">{zone.pace}</span>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Update/Input section */}
            {isEditing ? <InputForm /> : (
                <div className="text-center border-2 border-gray-700 rounded-lg p-6">
                    <button
                        onClick={() => setIsEditing(true)}
                        className="bg-amber-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-amber-500 transition-colors"
                    >
                        Actualizar resultados
                    </button>
                </div>
            )}
        </TestPageLayout>
    );
};

export default TestVAM;