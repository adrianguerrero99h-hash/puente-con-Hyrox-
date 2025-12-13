import React, { useState, useEffect } from 'react';
import TestPageLayout from './TestPageLayout';
import { getSingleTestResult, saveSingleTestResult } from '../utils/testResults';

const TEST_ID = 'TestCargaMaximaSledPush';

const TestCargaMaximaSledPush: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [maxWeight, setMaxWeight] = useState<number | ''>(''); 
    
    useEffect(() => {
        const savedData = getSingleTestResult(TEST_ID);
        if (savedData && typeof savedData.maxWeight === 'number') {
            setMaxWeight(savedData.maxWeight);
        }
    }, []);

    const hasResult = maxWeight !== '';

    const handleSave = () => {
        saveSingleTestResult(TEST_ID, { maxWeight });
        setIsEditing(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMaxWeight(value === '' ? '' : parseInt(value, 10));
    };

    return (
        <TestPageLayout onBack={onBack} title="Test Carga Máxima Sled Push">
            {/* Description */}
            <div className="bg-gray-900/50 border-2 border-gray-800 rounded-lg p-6 mb-8 text-center">
                <h2 className="text-xl font-bold text-amber-400 mb-2">Test Carga Máxima Sled Push 'Hasta la luna y de vuelta'</h2>
                <p className="text-lg text-white mb-4">Encuentra tu límite en Sled Push</p>
                <div className="text-left inline-block space-y-3 text-gray-200 text-sm md:text-base">
                    <p>Realiza series de 6m empezando con P.O de tu categoría <strong className="text-amber-400">+ 25Kg</strong> y añadiendo <strong className="text-amber-400">25Kg</strong> hasta que el tiempo en recorrer 6m sea superior al ritmo de <strong className="text-amber-400">TEST SPRINT de Sled Push (PRO)</strong></p>
                    <p>Descansamos <strong className="text-amber-400">30"</strong> cada 6m hasta RPE 8, luego <strong className="text-amber-400">1'</strong> tras cada tirada</p>
                    <p>Vigila tus gemelo / soleo y <strong className="text-amber-400">NO</strong> te la juegues a un intento más si estas en duda</p>
                </div>
            </div>

            {/* Results or Edit form */}
            <div className="border-2 border-gray-700 rounded-lg p-6">
                {!isEditing ? (
                    <div className="text-center">
                        {hasResult ? (
                            <>
                                <h3 className="text-lg font-bold text-amber-400 mb-2">Resultados</h3>
                                <p className="text-white text-2xl md:text-3xl font-bold">Peso máximo Sled Push: <span className="text-amber-400">{maxWeight} Kg</span></p>
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="mt-6 bg-gray-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-amber-400 hover:text-black transition-colors"
                                >
                                    Actualizar resultados
                                </button>
                            </>
                        ) : (
                            <>
                                <p className="text-gray-400 mb-4">Aún no has ingresado tus resultados</p>
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="bg-amber-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-amber-500 transition-colors"
                                >
                                    Actualizar resultados
                                </button>
                            </>
                        )}
                    </div>
                ) : (
                    <div>
                        <h3 className="text-center text-amber-400 font-bold mb-4">Actualizar resultados</h3>
                        <div className="bg-gray-800 p-3 rounded-md flex items-center justify-between gap-4 mb-3 max-w-sm mx-auto">
                            <div>
                                <label className="text-blue-400 text-xs font-bold block">Peso máximo Sled Push (Kg)</label>
                                <input
                                    type="number"
                                    name="maxWeight"
                                    value={maxWeight}
                                    onChange={handleInputChange}
                                    placeholder="Peso máximo"
                                    className="bg-transparent text-white text-lg font-mono w-full focus:outline-none"
                                />
                            </div>
                            <button
                                onClick={() => setMaxWeight('')}
                                className="bg-gray-700 text-white text-xs font-bold py-1 px-3 rounded hover:bg-red-600 transition-colors"
                            >
                                Borrar
                            </button>
                        </div>
                        <div className="text-center mt-6">
                            <button
                                onClick={handleSave}
                                className="bg-amber-400 text-black font-bold py-2 px-8 rounded-lg hover:bg-amber-500 transition-colors"
                            >
                                Guardar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </TestPageLayout>
    );
};

export default TestCargaMaximaSledPush;