import React, { useState } from 'react';
import DocumentTextIcon from './icons/DocumentTextIcon';

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

const ChevronUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
);

const GlossarySection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-8">
        <h5 className="font-bold text-md sm:text-lg text-amber-400 mb-4 border-b-2 border-gray-700 pb-2">{title}</h5>
        {children}
    </div>
);

const tableData = [
    { zone: 1, name: 'Recuperación', fthr: '<68', ftp: '<55', time: 'Infinito', talk: 'HABLAR Y RESPIRAR NORMALMENTE', rpe: '1 a 2', color: 'bg-teal-600' },
    { zone: 2, name: 'Resistencia Aeróbica', fthr: '69-83', ftp: '56-75', time: '2h30\' a 6h', talk: 'LE CUESTA MÁS HABLAR, TIENE UNA LIGERA DIFICULTAD PARA RESPIRAR.', rpe: '3 a 5', color: 'bg-green-600' },
    { zone: 3, name: 'Tempo', fthr: '84-94', ftp: '76-90', time: '1h a 2h30\'', talk: 'SÓLO PUEDE COMPLETAR 1-2 FRASES, FALTA DE AIRE MODERADA', rpe: '5 a 6', color: 'bg-lime-600' },
    { zone: 4, name: 'Umbral Anaeróbico', fthr: '95-105', ftp: '91-105', time: '20\' a 60\'', talk: 'FRASES ROTAS, RESPIRACIÓN DÉBIL', rpe: '7 a 8', color: 'bg-yellow-500' },
    { zone: 5, name: 'VO₂ máx.', fthr: '>106', ftp: '106-120', time: '7\' a 20\'', talk: 'FRASES ENTRECORTADAS, RESPIRACIÓN ENTRECORTADA', rpe: '8 a 9', color: 'bg-orange-500' },
    { zone: 6, name: 'Capacidad Anaeróbica', fthr: 'N/A', ftp: '121-150', time: '30" a 7\'', talk: 'NO PUEDE HABLAR, JADEA PARA RESPIRAR', rpe: '9 a 10', color: 'bg-red-600' },
    { zone: 7, name: 'Potencia Neuromuscular', fthr: 'N/A', ftp: 'N/A', time: '10"-30"', talk: 'NO PUEDE HABLAR, JADEA PARA RESPIRAR', rpe: '10', color: 'bg-slate-700' },
];


const Glossary: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-black border-2 border-gray-700 rounded-lg overflow-hidden mb-5">
             <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center p-4 bg-gray-900/70"
                aria-expanded={isOpen}
            >
                <h4 className="flex-1 font-bold text-left text-amber-400 tracking-wide flex items-center gap-3">
                     Glosario de términos
                     <span className="text-amber-400"><DocumentTextIcon /></span>
                </h4>
                <span className="text-white">
                    {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </span>
            </button>
             <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[4000px]' : 'max-h-0'}`}>
                <div className="p-5 bg-gray-900/30 text-gray-300 text-sm sm:text-base">
                    
                    <GlossarySection title="Abreviaturas">
                        <ul className="space-y-2">
                            <li><strong className="text-white font-mono mr-2">PO</strong> - Peso Oficial</li>
                            <li><strong className="text-white font-mono mr-2">UB</strong> - (Unbroken): al fallo/sin parar</li>
                            <li><strong className="text-white font-mono mr-2">BW</strong> - (Bodyweight): propio peso</li>
                            <li><strong className="text-white font-mono mr-2">RH</strong> - Ritmo Hyrox</li>
                            <li><strong className="text-white font-mono mr-2">DB</strong> - (dumble): mancuerna</li>
                            <li><strong className="text-white font-mono mr-2">TCM</strong> - Test Carga Máxima</li>
                            <li><strong className="text-white font-mono mr-2">OH</strong> - (Over Head): por encima de la cabeza</li>
                            <li><strong className="text-white font-mono mr-2">HR</strong> - (Hand Release): quitando las manos</li>
                            <li><strong className="text-white font-mono mr-2">SPM</strong> - (Stroke per minute): paladas por minuto</li>
                        </ul>
                    </GlossarySection>

                    <GlossarySection title="Metodología">
                        <div className="space-y-4">
                            <div>
                                <p className="font-bold text-white">EMOM (Every Minute On Minute)</p>
                                <p>Entrenamiento en el que debes completar un determinado número de repeticiones de un ejercicio dentro de un minuto. Si terminas antes de que el minuto acabe, el tiempo restante se usa como descanso antes de empezar la siguiente ronda.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white">AFAP (As Fast As Possible)</p>
                                <p>Entrenamiento en el que el objetivo es completar un número determinado de repeticiones o rondas de ejercicios lo más rápido posible, sin límite de tiempo.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white">AMRAP (As Many Rounds/Reps As Possible)</p>
                                <p>Entrenamiento en el que debes completar el máximo número de rondas o repeticiones posible en un tiempo determinado.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white">For Time (por tiempo)</p>
                                <p>Entrenamiento en el que el objetivo es completar una serie de ejercicios o rondas en el menor tiempo posible.</p>
                            </div>
                        </div>
                    </GlossarySection>

                    <GlossarySection title="Escalas de intensidad en entrenamientos de fuerza">
                         <div className="space-y-4">
                            <div>
                                <p className="font-bold text-white">RPE (Rate of Perceived Exertion - Escala de Esfuerzo Percibido)</p>
                                <p>Evalúa el esfuerzo en una escala del 1 al 10, donde 1 es muy fácil y 10 es el máximo esfuerzo posible.</p>
                                <p className="mt-2 pl-4 border-l-2 border-amber-400 italic"><strong>Ejemplo:</strong> RPE 7 = esfuerzo alto, pero todavía podrías hacer algunas repeticiones más.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white">RIR (Reps In Reserve - Repeticiones en Reserva)</p>
                                <p>Indica cuántas repeticiones podrías haber hecho al final de una serie antes de llegar al fallo muscular.</p>
                                 <p className="mt-2 pl-4 border-l-2 border-amber-400 italic"><strong>Ejemplo:</strong> RIR 2 significa que terminaste la serie con la sensación de que podrías haber hecho 2 repeticiones más.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white">RM (Repetition Maximum - Repetición Máxima)</p>
                                <p>Se refiere a la cantidad máxima de peso que puedes levantar para una cantidad específica de repeticiones.</p>
                                <div className="mt-2 pl-4 border-l-2 border-amber-400 italic">
                                    <p><strong>Ejemplo:</strong></p>
                                    <ul className="list-disc list-inside ml-4">
                                        <li><strong>RM</strong> = el peso máximo que puedes levantar una sola vez.</li>
                                        <li><strong>3RM</strong> = el peso máximo que puedes levantar para 3 repeticiones.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </GlossarySection>

                    <GlossarySection title="Escalas de esfuerzo en entrenamientos de carrera">
                        <div className="overflow-x-auto rounded-lg border border-gray-700">
                            <table className="w-full min-w-[800px] text-xs text-left text-white border-collapse">
                                <thead className="bg-red-800 text-white uppercase text-center font-bold">
                                    <tr>
                                        <th className="p-3 border-r border-gray-600">ZONA</th>
                                        <th className="p-3 border-r border-gray-600">NOMBRE ZONA</th>
                                        <th className="p-3 border-r border-gray-600">% de FTHR</th>
                                        <th className="p-3 border-r border-gray-600">% de FTP</th>
                                        <th className="p-3 border-r border-gray-600">TIEMPO LÍMITE</th>
                                        <th className="p-3 border-r border-gray-600">TEST DE HABLA</th>
                                        <th className="p-3">RPE (1-10)</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-gray-800">
                                    {tableData.map((row) => (
                                        <tr key={row.zone} className="border-t border-gray-700">
                                            <td className={`p-3 border-r border-gray-600 text-center font-bold text-black ${row.color}`}>{row.zone}</td>
                                            <td className="p-3 border-r border-gray-600 font-semibold">{row.name}</td>
                                            <td className="p-3 border-r border-gray-600 text-center">{row.fthr}</td>
                                            <td className="p-3 border-r border-gray-600 text-center">{row.ftp}</td>
                                            <td className="p-3 border-r border-gray-600 text-center whitespace-nowrap">{row.time}</td>
                                            <td className="p-3 border-r border-gray-600">{row.talk}</td>
                                            <td className="p-3 text-center font-bold">{row.rpe}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </GlossarySection>
                </div>
            </div>
        </div>
    );
};

export default Glossary;