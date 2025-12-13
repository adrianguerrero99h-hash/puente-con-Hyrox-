import React, { useState } from 'react';
import TestPageLayout from './TestPageLayout';

const initialTimes = {
    attempt1: '',
    attempt2: '',
    attempt3: '',
    attempt4: '',
};

const TestSprintSledPullDrag: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [times, setTimes] = useState(initialTimes);
    const hasResults = Object.values(times).some(time => time !== '');

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTimes(prev => ({ ...prev, [name]: value }));
    };

    const handleClear = (name: keyof typeof initialTimes) => {
        setTimes(prev => ({ ...prev, [name]: '' }));
    };
    
    const handleSave = () => {
        console.log('Saving results:', times);
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
                        placeholder="00:00:00.000"
                        className="bg-transparent text-white text-lg font-mono w-full focus:outline-none"
                    />
                ) : (
                    <p className="text-white text-lg font-mono">{value || '00:00:00.000'}</p>
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
        <TestPageLayout onBack={onBack} title="Test Sprint Sled Pull & Drag (Tirón)">
            <div className="bg-gray-900/50 border-2 border-gray-800 rounded-lg p-6 mb-8 text-center">
                <h2 className="text-xl font-bold text-amber-400 mb-4">¿En que consiste el Test Sprint Sled Pull & Drag?</h2>
                
                <div className="text-left inline-block space-y-4 text-gray-200">
                    <div>
                        <p><strong className="text-amber-400">A.</strong> Realiza 12,5m de tirón de trineo lo más rápido posible con el <strong className="text-white">P.O OPEN</strong> (105kg hombres / 75kg mujeres). Distancia de competición</p>
                        <p><strong className="text-amber-400">B.</strong> Descansa 1 minutos</p>
                        <p><strong className="text-amber-400">C.</strong> Vuelve a repetir el test con el mismo peso</p>
                        <p className="text-xs text-gray-400 mt-2">* APUNTA el tiempo que has tardado en cada uno de los intentos</p>
                        <p className="text-xs text-gray-400">** El peso reflejado es INCLUYENDO el peso del trineo.</p>
                    </div>
                    
                    <div>
                        <p><strong className="text-amber-400">D.</strong> Descansa 2 minutos y directo a:</p>
                    </div>

                    <div>
                        <p><strong className="text-amber-400">E.</strong> Realiza 12,5m de tirón de trineo lo más rápido posible con el <strong className="text-white">P.O PRO</strong> (155kg hombres / 125kg mujeres). Distancia de competición</p>
                        <p><strong className="text-amber-400">F.</strong> Descansa 1 minutos</p>
                        <p><strong className="text-amber-400">G.</strong> Vuelve a repetir el test con el mismo peso</p>
                        <p className="text-xs text-gray-400 mt-2">* APUNTA el tiempo que has tardado en cada uno de los intentos</p>
                        <p className="text-xs text-gray-400">** El peso reflejado es INCLUYENDO el peso del trineo.</p>
                    </div>
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
                        <ResultRow label="Tiempo del primer intento (hh:mm:ss.ms)" name="attempt1" value={times.attempt1} />
                        <ResultRow label="Tiempo del segundo intento (hh:mm:ss.ms)" name="attempt2" value={times.attempt2} />
                        <ResultRow label="Tiempo del tercer intento (hh:mm:ss.ms)" name="attempt3" value={times.attempt3} />
                        <ResultRow label="Tiempo del cuarto intento (hh:mm:ss.ms)" name="attempt4" value={times.attempt4} />

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

export default TestSprintSledPullDrag;
