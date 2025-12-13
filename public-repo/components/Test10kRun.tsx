import React, { useState } from 'react';
import TestPageLayout from './TestPageLayout';

const initialResults = {
    distance: '10K',
    totalTime: '',
    activeCalories: '',
    totalCalories: '',
    elevationGain: '',
    avgPower: '',
    avgCadence: '',
    avgPace: '',
    avgHeartRate: '',
};

const Test10kRun: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [savedResults, setSavedResults] = useState(initialResults);
    const [isEditing, setIsEditing] = useState(false);
    const [currentResults, setCurrentResults] = useState(savedResults);
    
    const hasResults = Object.values(savedResults).some(value => value !== '' && value !== '10K');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCurrentResults(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        setSavedResults(currentResults);
        setIsEditing(false);
    };
    
    const handleEdit = () => {
        setCurrentResults(savedResults);
        setIsEditing(true);
    };

    const FormField: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
        <div className="bg-gray-800 p-3 rounded-md">
            <label className="text-gray-400 text-xs font-bold block mb-1">{label}</label>
            {children}
        </div>
    );

    const commonInputClasses = "bg-transparent text-white text-base sm:text-lg font-mono w-full focus:outline-none disabled:text-gray-500";

    return (
        <TestPageLayout onBack={onBack} title="Test 10K de Carrera Rodaje Competitivo">
            <div className="bg-gray-900/50 border-2 border-gray-800 rounded-lg p-6 mb-8 text-center">
                <h2 className="text-xl font-bold text-amber-400 mb-4">Test 10K de Carrera Rodaje Competitivo</h2>
                <div className="text-left inline-block space-y-1 text-gray-200 text-sm">
                    <p>Rodaje competitivo de 10K.</p>
                    <p>* Busca tu mejor / mayor ritmo sostenible en carrera para realizar un 10K.</p>
                    <p>* Si eres un corredor experimentado o acostumbrado a media / larga distancia, haz el test sobre 12km</p>
                    <p>* Recuerda calentar correctamente antes de comenzar.</p>
                    <p>* Apunta todos los datos, FC, Ritmo medio ..</p>
                </div>
            </div>

            <div className="border-2 border-gray-700 rounded-lg p-6">
                { !hasResults && !isEditing ? (
                    <div className="text-center p-4">
                        <p className="text-gray-400 mb-4">Aún no has ingresado tus resultados</p>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="bg-amber-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-amber-500 transition-colors"
                        >
                            Ingresar resultados
                        </button>
                    </div>
                ) : (
                    <div className="space-y-4">
                         <div className='text-center mb-6'>
                            <button
                                onClick={handleEdit}
                                className="bg-amber-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-amber-500 transition-colors"
                            >
                                Actualizar resultados
                            </button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <div className="space-y-4">
                                <FormField label="Tiempo total">
                                    <input type="text" name="totalTime" value={currentResults.totalTime} onChange={handleInputChange} placeholder="00:00:00.000" disabled={!isEditing} className={commonInputClasses} />
                                </FormField>
                                <FormField label="Kilocalorías activas">
                                    <input type="number" name="activeCalories" value={currentResults.activeCalories} onChange={handleInputChange} placeholder="kcal" disabled={!isEditing} className={commonInputClasses} />
                                </FormField>
                                <FormField label="Desnivel (m)">
                                    <input type="number" name="elevationGain" value={currentResults.elevationGain} onChange={handleInputChange} placeholder="m" disabled={!isEditing} className={commonInputClasses} />
                                </FormField>
                                <FormField label="Cadencia media">
                                    <input type="number" name="avgCadence" value={currentResults.avgCadence} onChange={handleInputChange} placeholder="spm" disabled={!isEditing} className={commonInputClasses} />
                                </FormField>
                                <FormField label="Frecuencia cardíaca media">
                                    <input type="number" name="avgHeartRate" value={currentResults.avgHeartRate} onChange={handleInputChange} placeholder="bpm" disabled={!isEditing} className={commonInputClasses} />
                                </FormField>
                           </div>
                           <div className="space-y-4">
                                 <FormField label="Distancia">
                                     <div className="flex gap-4 pt-1">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="distance" value="10K" checked={currentResults.distance === '10K'} onChange={handleInputChange} disabled={!isEditing} className="form-radio bg-gray-700 border-gray-600 text-amber-400 focus:ring-amber-500 disabled:opacity-50" />
                                            <span className="text-white text-base sm:text-lg">10K</span>
                                        </label>
                                         <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="distance" value="12K" checked={currentResults.distance === '12K'} onChange={handleInputChange} disabled={!isEditing} className="form-radio bg-gray-700 border-gray-600 text-amber-400 focus:ring-amber-500 disabled:opacity-50" />
                                            <span className="text-white text-base sm:text-lg">12K</span>
                                        </label>
                                     </div>
                                </FormField>
                                 <FormField label="Total de kilocalorías">
                                    <input type="number" name="totalCalories" value={currentResults.totalCalories} onChange={handleInputChange} placeholder="kcal" disabled={!isEditing} className={commonInputClasses} />
                                </FormField>
                                <FormField label="Potencia media (W)">
                                    <input type="number" name="avgPower" value={currentResults.avgPower} onChange={handleInputChange} placeholder="W" disabled={!isEditing} className={commonInputClasses} />
                                </FormField>
                                <FormField label="Ritmo medio">
                                    <input type="text" name="avgPace" value={currentResults.avgPace} onChange={handleInputChange} placeholder="mm:ss /km" disabled={!isEditing} className={commonInputClasses} />
                                </FormField>
                           </div>
                        </div>

                        {isEditing && (
                            <div className="text-center mt-8">
                                <button
                                    type="button"
                                    onClick={handleSave}
                                    className="bg-amber-400 text-black font-bold py-2 px-8 rounded-lg hover:bg-amber-500 transition-colors"
                                >
                                    Guardar
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </TestPageLayout>
    );
};

export default Test10kRun;