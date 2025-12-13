import React, { useState, useMemo, useEffect } from 'react';
import TestPageLayout from './TestPageLayout';
import { getSingleTestResult, saveSingleTestResult } from '../utils/testResults';

const TEST_ID = 'TestFTPBikeErg';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

const NumberIcon: React.FC<{ num: number }> = ({ num }) => (
    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-500 text-black rounded-full font-bold text-sm mr-2">
        {num}
    </div>
);

const TestFTPBikeErg: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [avgPower, setAvgPower] = useState<number | ''>('');

    useEffect(() => {
        const savedData = getSingleTestResult(TEST_ID);
        if (savedData && typeof savedData.avgPower === 'number') {
            setAvgPower(savedData.avgPower);
        }
    }, []);

    const hasResult = avgPower !== '';

    const handleSave = () => {
        saveSingleTestResult(TEST_ID, { avgPower });
        setIsEditing(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setAvgPower(value === '' ? '' : parseInt(value, 10));
    };
    
    const ftp = useMemo(() => {
        if (typeof avgPower === 'number' && avgPower > 0) {
            return Math.round(avgPower * 0.95);
        }
        return 0;
    }, [avgPower]);

    return (
        <TestPageLayout onBack={onBack} title="Test FTP 20' BikeErg">
            {/* Description */}
            <div className="bg-gray-900/50 border-2 border-gray-800 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold text-amber-400 mb-4 text-center">Test FTP de 20' BikeErg</h2>
                <p className="text-gray-300 mb-6 text-center max-w-3xl mx-auto">
                    El Test FTP de 20 minutos en la BikeErg es una prueba para determinar tu umbral de potencia funcional (FTP), que es la mayor potencia que puedes mantener de forma constante durante aproximadamente una hora. En este caso se usa un esfuerzo máximo de 20 minutos para calcular el FTP.
                </p>
                
                <div className="space-y-6 text-gray-200 text-sm md:text-base">
                    <div>
                        <h3 className="font-bold text-white mb-3 flex items-center"><CheckIcon />Protocolo del Test FTP de 20' en BikeErg:</h3>
                        <div className="pl-7 space-y-4">
                            <div>
                                <p className="font-semibold text-amber-400 flex items-center mb-2"><NumberIcon num={1} />Calentamiento (10-15'):</p>
                                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
                                    <li>3 minutos de pedaleo suave.</li>
                                    <li>3 minutos de progresión: aumenta la intensidad de manera gradual hasta sentirte cómodo.</li>
                                    <li>3 minutos de recuperación suave.</li>
                                    <li>3 minutos de intervalos de 1 minuto ON (intenso) y 1 minuto OFF (suave).</li>
                                    <li>3 minutos de pedaleo muy suave para recuperar.</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold text-amber-400 flex items-center mb-2"><NumberIcon num={2} />Test FTP de 20 minutos:</p>
                                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
                                    <li>Configura la BikeErg para que muestre los vatios (W) en la pantalla.</li>
                                    <li>Mantén un ritmo constante y desafiante que puedas sostener durante los 20 minutos completos.</li>
                                    <li>Debe ser un esfuerzo duro, pero que puedas mantener sin necesidad de parar.</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold text-amber-400 flex items-center mb-2"><CheckIcon />Cálculo del FTP:</p>
                                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
                                    <li>Toma la potencia media (W) obtenida durante los 20 minutos del test.</li>
                                    <li>Multiplica ese valor por 0,95 (95%) para obtener tu FTP.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Results or Edit form */}
            <div className="border-2 border-gray-700 rounded-lg p-6">
                {!isEditing ? (
                    <div className="text-center">
                        {hasResult ? (
                            <>
                                <h3 className="text-lg font-bold text-amber-400 mb-4">Resultados</h3>
                                <div className="space-y-3">
                                    <p className="text-white text-xl sm:text-2xl font-bold">Potencia media: <span className="text-amber-400">{avgPower} W</span></p>
                                    <p className="text-white text-2xl sm:text-3xl font-bold">Tu FTP estimado: <span className="text-amber-400">{ftp} W</span></p>
                                </div>
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
                            <label className="text-blue-400 text-xs font-bold block">Potencia media (W)</label>
                            <input
                                type="number"
                                name="avgPower"
                                value={avgPower}
                                onChange={handleInputChange}
                                placeholder="Vatios"
                                className="bg-transparent text-white text-base sm:text-lg font-mono w-full focus:outline-none text-right"
                            />
                            <button
                                onClick={() => setAvgPower('')}
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

export default TestFTPBikeErg;