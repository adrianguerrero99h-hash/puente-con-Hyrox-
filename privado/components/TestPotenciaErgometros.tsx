import React, { useState, useEffect } from 'react';
import TestPageLayout from './TestPageLayout';
import { getSingleTestResult, saveSingleTestResult } from '../utils/testResults';

const TEST_ID = 'TestPotenciaErgometros';

const initialTimes = {
    ski100: '',
    ski500: '',
    row100: '',
    row500: '',
};

const TestPotenciaErgometros: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [times, setTimes] = useState(initialTimes);

    useEffect(() => {
        const savedData = getSingleTestResult(TEST_ID);
        if (savedData) {
            setTimes(savedData);
        }
    }, []);
    
    const hasResults = Object.values(times).some(time => time !== '');

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTimes(prev => ({ ...prev, [name]: value }));
    };

    const handleClear = (name: keyof typeof initialTimes) => {
        setTimes(prev => ({ ...prev, [name]: '' }));
    };
    
    const handleSave = () => {
        saveSingleTestResult(TEST_ID, times);
        setIsEditing(false);
    }
    
    const ResultRow = ({ label, name, value }: { label: string, name: keyof typeof initialTimes, value: string }) => (
        <div className="bg-gray-800 p-3 rounded-md flex items-center justify-between gap-4 mb-3">
            <div>
                <label className="text-blue-400 text-xs font-bold block">{label}</label>
                {isEditing ? (
                    <input
                        type="text"
                        name={name}
                        value={value}
                        onChange={handleTimeChange}
                        placeholder="mm:ss.ms"
                        className="bg-transparent text-white text-lg font-mono w-full focus:outline-none"
                    />
                ) : (
                    <p className="text-white text-lg font-mono">{value || '00:00.000'}</p>
                )}
            </div>
            {isEditing && (
                 <button
                    onClick={() => handleClear(name)}
                    className="bg-gray-700 text-white text-xs font-bold py-1 px-3 rounded hover:bg-red-600 transition-colors"
                >
                    Borrar
                </button>
            )}
        </div>
    );

    return (
        <TestPageLayout onBack={onBack} title="Test Potencia Ergómetros">
            <div className="bg-gray-900/50 border-2 border-gray-800 rounded-lg p-6 mb-8 text-center">
                <h2 className="text-xl font-bold text-amber-400 mb-4">¿En que consiste el Test de Potencia de Ergómetros?</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    El test de potencia de ergómetros consiste en realizar cuatro test a máxima velocidad en los ergómetros de Ski y Remo de la siguiente manera:
                </p>
                <div className="text-left inline-block space-y-2 text-gray-200">
                    <p><strong className="text-amber-400">A.</strong> Realiza 100 metros de Ski a máxima velocidad</p>
                    <p><strong className="text-amber-400">B.</strong> Descansa 2 minutos y directo a:</p>
                    <p><strong className="text-amber-400">C.</strong> Realiza 500 metros de Ski a máxima velocidad</p>
                    <p><strong className="text-amber-400">D.</strong> Descansa 5 minutos y directo a:</p>
                    <p><strong className="text-amber-400">E.</strong> Realiza 100 metros de Remo a máxima velocidad</p>
                    <p><strong className="text-amber-400">F.</strong> Descansa 2 minutos y directo a:</p>
                    <p><strong className="text-amber-400">G.</strong> Realiza 500 metros de Remo a máxima velocidad</p>
                </div>
                <div className="text-xs text-gray-400 mt-6 text-left max-w-2xl mx-auto space-y-1">
                    <p>* Antes de comenzar los test realiza un calentamiento específico, incluyendo ejercicios de movilidad de hombros, espalda y cadera y activaciones de core y piernas.</p>
                    <p>** Realiza los cuatro test en la misma sesión.</p>
                </div>
            </div>

            <div className="border-2 border-gray-700 rounded-lg p-6">
                {!isEditing && !hasResults && (
                    <div className="text-center">
                        <p className="text-gray-400 mb-4">Aún no has ingresado tus resultados</p>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="bg-amber-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-amber-500 transition-colors"
                        >
                            Actualizar resultados
                        </button>
                    </div>
                )}

                {(isEditing || hasResults) && (
                     <>
                        {!isEditing && hasResults && (
                            <div className='text-center mb-4'>
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="bg-gray-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-amber-400 hover:text-black transition-colors"
                                >
                                    Actualizar resultados
                                </button>
                            </div>
                        )}
                        <ResultRow label="Tiempo 100m SkiErg" name="ski100" value={times.ski100} />
                        <ResultRow label="Tiempo 500m SkiErg" name="ski500" value={times.ski500} />
                        <ResultRow label="Tiempo 100m RowErg" name="row100" value={times.row100} />
                        <ResultRow label="Tiempo 500m RowErg" name="row500" value={times.row500} />

                       {isEditing && (
                            <div className="text-center mt-6">
                                <button
                                    onClick={handleSave}
                                    className="bg-amber-400 text-black font-bold py-2 px-8 rounded-lg hover:bg-amber-500 transition-colors"
                                >
                                    Guardar
                                </button>
                            </div>
                       )}
                    </>
                )}
            </div>
        </TestPageLayout>
    );
};

export default TestPotenciaErgometros;