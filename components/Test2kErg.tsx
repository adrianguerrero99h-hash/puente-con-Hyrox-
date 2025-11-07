import React, { useState, useMemo } from 'react';
import TestPageLayout from './TestPageLayout';

interface Test2kErgProps {
    type: 'Ski' | 'Row';
    onBack: () => void;
}

const Test2kErg: React.FC<Test2kErgProps> = ({ type, onBack }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [time, setTime] = useState(''); 
    
    const handleSave = () => {
        console.log(`Saving ${type} result:`, time);
        setIsEditing(false);
    };

    const parsedSeconds = useMemo(() => {
        if (!time) return null;
        const parts = time.split(':').map(part => parseFloat(part.replace(',', '.')));
        if (parts.some(isNaN)) return null;

        let seconds = 0;
        if (parts.length === 2) {
            seconds = parts[0] * 60 + parts[1];
        } else if (parts.length === 1) {
            seconds = parts[0];
        } else {
            return null;
        }
        return seconds;
    }, [time]);

    const calculatedStats = useMemo(() => {
        if (parsedSeconds === null || parsedSeconds <= 0) {
            return { avgPace: '00:00.0', watts: '0' };
        }
        const avgPaceSeconds = parsedSeconds / 4;
        const pacePerMeter = avgPaceSeconds / 500;
        const watts = 2.80 / Math.pow(pacePerMeter, 3);

        const formatPace = (seconds: number): string => {
            const minutes = Math.floor(seconds / 60);
            const secs = seconds % 60;
            const paddedSecs = secs < 10 ? `0${secs.toFixed(1)}` : secs.toFixed(1);
            return `${String(minutes).padStart(2, '0')}:${paddedSecs}`;
        };

        return {
            avgPace: formatPace(avgPaceSeconds),
            watts: Math.round(watts).toString(),
        };
    }, [parsedSeconds]);
    
    const title = `Test 2K Resistencia ${type} Erg`;
    const description = `El test ergómetro con ${type.toLowerCase()} consiste en recorrer 2km a la máxima intensidad SOSTENIBLE.`;

    return (
        <TestPageLayout onBack={onBack} title={title}>
            {/* Description */}
            <div className="bg-gray-900/50 border-2 border-gray-800 rounded-lg p-6 mb-8 text-center">
                <h2 className="text-xl font-bold text-amber-400 mb-4">¿En qué consiste el test de {type}?</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    {description}
                </p>
                <div className="text-left inline-block space-y-2 text-gray-200 text-sm">
                    <p>Recuerda calentar correctamente antes de comenzar.</p>
                    <p>* Dumper en tu drag factor ideal o en resistencia que compites en Hyrox.</p>
                    <p>Una vez finalizado el test anota el tiempo que has tardado en recorrer los 2km.</p>
                    <p className="mt-4 text-xs text-gray-400">No realices todos los test el mismo día, deja al menos 8h entre cada uno de los test de ergómetro para que la medición sea lo más precisa posible.</p>
                </div>
            </div>

            {/* Results Display */}
            <div className="border-2 border-gray-700 rounded-lg p-6 mb-8">
                <h3 className="text-center text-amber-400 font-bold mb-4">Tu mejor resultado</h3>
                <div className="text-center font-mono space-y-2">
                    <p className="text-3xl sm:text-4xl text-white">{time || '00:00.0'}</p>
                    <div className="flex justify-center items-baseline space-x-4 text-gray-400">
                        <p><span className="text-base sm:text-lg text-white">{calculatedStats.avgPace}</span> prom /500m</p>
                        <p><span className="text-base sm:text-lg text-white">2000 m</span> metros parciales</p>
                        <p><span className="text-base sm:text-lg text-white">{calculatedStats.watts}</span> vatios</p>
                    </div>
                </div>
            </div>

            {/* Update/Input section */}
            <div className="border-2 border-gray-700 rounded-lg p-6">
                {!isEditing ? (
                    <div className="text-center">
                        <button
                            onClick={() => setIsEditing(true)}
                            className="bg-amber-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-amber-500 transition-colors"
                        >
                            Actualizar resultados
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="bg-gray-800 p-3 rounded-md flex items-center justify-between gap-4 mb-3">
                            <div>
                                <label className="text-blue-400 text-xs font-bold block">Tiempo del test (mm:ss.s)</label>
                                <input
                                    type="text"
                                    name="testTime"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    placeholder="mm:ss.s"
                                    className="bg-transparent text-white text-lg font-mono w-full focus:outline-none"
                                />
                            </div>
                            <button
                                onClick={() => setTime('')}
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

export default Test2kErg;