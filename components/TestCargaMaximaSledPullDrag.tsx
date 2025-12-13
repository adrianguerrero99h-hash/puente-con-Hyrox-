import React, { useState, useEffect } from 'react';
import TestPageLayout from './TestPageLayout';
import { getSingleTestResult, saveSingleTestResult } from '../utils/testResults';

const TEST_ID = 'TestCargaMaximaSledPullDrag';

const initialWeights = { sledPull: '', sledDrag: '' };

const TestCargaMaximaSledPullDrag: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [savedWeights, setSavedWeights] = useState(initialWeights);
    const [currentWeights, setCurrentWeights] = useState(initialWeights);
    
    useEffect(() => {
        const data = getSingleTestResult(TEST_ID);
        if (data) {
            setSavedWeights(data);
            setCurrentWeights(data);
        }
    }, []);

    const handleSave = () => {
        saveSingleTestResult(TEST_ID, currentWeights);
        setSavedWeights(currentWeights);
        setIsEditing(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCurrentWeights(prev => ({ ...prev, [name]: value }));
    };

    const handleEditClick = () => {
        setCurrentWeights(savedWeights);
        setIsEditing(true);
    };
    
    const hasResults = savedWeights.sledPull || savedWeights.sledDrag;

    return (
        <TestPageLayout onBack={onBack} title="Test Carga Máxima Sled Pull & Drag">
            {/* Description */}
            <div className="bg-gray-900/50 border-2 border-gray-800 rounded-lg p-6 mb-8 text-center">
                <h2 className="text-xl font-bold text-amber-400 mb-4">Carga Máxima Sled Pull 'A Marte y de vuelta'</h2>
                <div className="text-left inline-block space-y-6 text-gray-200 text-sm md:text-base">
                    <div>
                        <p className="font-bold text-white text-lg mb-2">Sled Pull</p>
                        <p className="font-bold text-amber-400 mb-2">Encuentra tu límite en Sled Pull</p>
                        <p className="mb-1">Realiza series de 6m empezando con P.O de tu categoría <strong className="text-white">+ 15Kg</strong> y añadiendo <strong className="text-white">15Kg</strong> hasta no conseguir desplazar 4-5 pasos sin pausa</p>
                        <p className="mb-1">Siempre tiraremos desde el fondo, así que deja un TRX al lado contrario de la cuerda para devolver el trineo al inicio de los 12,5m</p>
                        <p>Descansamos <strong className="text-white">30” a 1’</strong> tras cada tirada</p>
                    </div>
                    
                    <div className="text-center font-bold text-white">-</div>
                    <p className="text-center font-bold text-white">Descansa 5 minutos y directo a:</p>
                    <div className="text-center font-bold text-white">-</div>
                    
                    <div>
                        <p className="font-bold text-white text-lg mb-2">Sled Drag</p>
                        <p className="font-bold text-amber-400 mb-2">Encuentra tu límite en Sled Drag</p>
                        <p className="mb-1">Realiza series de 6m empezando con P.O de tu categoría <strong className="text-white">+ 15Kg</strong> y añadiendo <strong className="text-white">15Kg</strong> hasta que el tiempo en recorrer 6m sea superior al ritmo de <strong className="text-white">TEST SPRINT de Sled Drag (PRO)</strong></p>
                        <p>Descansamos <strong className="text-white">30” a 1’</strong> tras cada tirada</p>
                    </div>
                </div>
            </div>

            {/* Results or Edit form */}
            <div className="border-2 border-gray-700 rounded-lg p-6">
                {isEditing ? (
                    <div>
                        <h3 className="text-center text-amber-400 font-bold mb-4">Actualizar resultados</h3>
                        <div className="max-w-sm mx-auto space-y-4">
                            <div className="bg-gray-800 p-3 rounded-md">
                                <label className="text-blue-400 text-xs font-bold block">Peso máximo Sled Pull (Kg)</label>
                                <input
                                    type="number"
                                    name="sledPull"
                                    value={currentWeights.sledPull}
                                    onChange={handleInputChange}
                                    placeholder="Peso máximo"
                                    className="bg-transparent text-white text-lg font-mono w-full focus:outline-none"
                                />
                            </div>
                            <div className="bg-gray-800 p-3 rounded-md">
                                <label className="text-blue-400 text-xs font-bold block">Peso máximo Sled Drag (Kg)</label>
                                <input
                                    type="number"
                                    name="sledDrag"
                                    value={currentWeights.sledDrag}
                                    onChange={handleInputChange}
                                    placeholder="Peso máximo"
                                    className="bg-transparent text-white text-lg font-mono w-full focus:outline-none"
                                />
                            </div>
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
                ) : (
                    <div className="text-center">
                        {hasResults ? (
                            <>
                                <h3 className="text-lg font-bold text-amber-400 mb-4">Resultados</h3>
                                <div className="flex justify-center gap-8">
                                    <div>
                                        <p className="text-gray-400 text-sm">Sled Pull</p>
                                        <p className="text-white text-2xl font-bold">{savedWeights.sledPull || 'N/A'} Kg</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Sled Drag</p>
                                        <p className="text-white text-2xl font-bold">{savedWeights.sledDrag || 'N/A'} Kg</p>
                                    </div>
                                </div>
                                <button
                                    onClick={handleEditClick}
                                    className="mt-6 bg-gray-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-amber-400 hover:text-black transition-colors"
                                >
                                    Actualizar resultados
                                </button>
                            </>
                        ) : (
                            <>
                                <p className="text-gray-400 mb-4">Aún no has ingresado tus resultados</p>
                                <button
                                    onClick={handleEditClick}
                                    className="bg-amber-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-amber-500 transition-colors"
                                >
                                    Actualizar resultados
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </TestPageLayout>
    );
};

export default TestCargaMaximaSledPullDrag;
