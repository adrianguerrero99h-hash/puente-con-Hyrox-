import React, { useState, useRef } from 'react';
import TestPotenciaErgometros from './TestPotenciaErgometros';
import Test2kErg from './Test2kErg';
import TestVAM from './TestVAM';
import Test10kRun from './Test10kRun';
import TestSprintSledPush from './TestSprintSledPush';
import TestCargaMaximaSledPush from './TestCargaMaximaSledPush';
import TestCargaMaximaSledPullDrag from './TestCargaMaximaSledPullDrag';
import TestFTPBikeErg from './TestFTPBikeErg';
import TestSprintSledPullDrag from './TestSprintSledPullDrag';
import { getTestResults, saveTestResults } from '../utils/testResults';


// --- Icon Components ---
const RunIcon = () => (
  <svg className="w-10 h-10 text-amber-400 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const SkiRowIcon = () => (
  <svg className="w-10 h-10 text-amber-400 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22l5.5-11L12 22"/><path d="M10.5 11L16 2l-1.5 9"/><path d="M19.5 11L22 2l-1.5 9"/><path d="M7 11h15"/></svg>
);
const SledIcon = () => (
  <svg className="w-10 h-10 text-amber-400 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 8h10v10H2z"/><path d="m17.5 18-5-10"/><path d="M22 8h-4.5"/><path d="M12 8V2"/></svg>
);
const BarbellIcon = () => (
    <svg className="w-10 h-10 text-amber-400 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6 12h12"/><path d="M5 12v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-2"/><path d="M15 12v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-2"/><path d="M5 12V8a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4"/><path d="M15 12V8a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4"/></svg>
);
const BikeIcon = () => (
  <svg className="w-10 h-10 text-amber-400 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5h-3.5l-2-7 4 1 2-3 2 3 4-1-2 7h-3.5"/></svg>
);


const testsData = [
    { id: "TestPotenciaErgometros", title: "Test Potencia Ergómetros", icon: <BarbellIcon /> },
    { id: "Test2kSkiErg", title: "Test 2K Resistencia Ski Erg", icon: <SkiRowIcon /> },
    { id: "Test2kRowErg", title: "Test 2K Resistencia Row Erg", icon: <SkiRowIcon /> },
    { id: "TestVAM", title: "Test VAM Velocidad Aeróbica Máxima", icon: <RunIcon /> },
    { id: "Test10kRun", title: "Test 10K de Carrera Rodaje Competitivo", icon: <RunIcon /> },
    { id: "TestSprintSledPush", title: "Test Sprint Sled Push (Empuje)", icon: <SledIcon /> },
    { id: "TestSprintSledPullDrag", title: "Test Sprint Sled Pull & Drag (Tirón)", icon: <SledIcon /> },
    { id: "TestCargaMaximaSledPush", title: "Test Carga Máxima Sled Push", icon: <SledIcon /> },
    { id: "TestCargaMaximaSledPullDrag", title: "Test Carga Máxima Sled Pull & Drag", icon: <SledIcon /> },
    { id: "TestFTPBikeErg", title: "Test FTP 20' BikeErg", icon: <BikeIcon /> }
];

const TestsGrid = ({ onTestSelect }: { onTestSelect: (id: string) => void }) => (
    <div className="p-4 sm:p-8 pt-0 bg-[#0c0c0c]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {testsData.map((test) => (
                <div 
                    key={test.id} 
                    className="group border-2 border-gray-800 rounded-lg bg-gray-900/50 flex flex-col items-center justify-center p-4 text-center cursor-pointer hover:border-amber-400 hover:bg-gray-900 transition-all duration-300 transform hover:-translate-y-1"
                    onClick={() => onTestSelect(test.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && onTestSelect(test.id)}
                >
                    {test.icon}
                    <h2 className="text-white font-bold text-sm leading-tight transition-colors group-hover:text-amber-400">{test.title}</h2>
                </div>
            ))}
        </div>
    </div>
);


const TestsPage: React.FC = () => {
    const [selectedTestId, setSelectedTestId] = useState<string | null>(null);
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleBack = () => {
        setSelectedTestId(null);
    };

    const handleImportClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const text = e.target?.result;
                if (typeof text !== 'string') throw new Error("File could not be read");
                const data = JSON.parse(text);

                if (typeof data !== 'object' || data === null) {
                    throw new Error("Invalid JSON format.");
                }

                if (window.confirm("¿Estás seguro de que quieres importar estos datos? Se sobrescribirán todos los resultados de tests existentes.")) {
                    saveTestResults(data);
                    setToastMessage('Datos importados. La página se recargará.');
                    setTimeout(() => window.location.reload(), 2000);
                }
            } catch (error) {
                console.error("Error importing data:", error);
                const message = error instanceof Error ? error.message : 'Unknown error';
                setToastMessage(`Error al importar: ${message}`);
                setTimeout(() => setToastMessage(null), 3000);
            } finally {
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
            }
        };
        reader.readAsText(file);
    };
    
    const handleExport = () => {
        try {
            const data = getTestResults();
            if (Object.keys(data).length === 0) {
                 setToastMessage('No hay datos para exportar.');
                 setTimeout(() => setToastMessage(null), 3000);
                 return;
            }

            const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
                JSON.stringify(data, null, 2)
            )}`;
            const link = document.createElement("a");
            link.href = jsonString;
            const date = new Date().toISOString().split('T')[0];
            link.download = `hyrox_test_results_${date}.json`;
            link.click();
            setToastMessage('Datos exportados correctamente.');
            setTimeout(() => setToastMessage(null), 3000);
        } catch (error) {
            console.error("Error exporting data:", error);
            setToastMessage('Error al exportar los datos.');
            setTimeout(() => setToastMessage(null), 3000);
        }
    };

    const renderSelectedTest = () => {
        switch (selectedTestId) {
            case "TestPotenciaErgometros":
                return <TestPotenciaErgometros onBack={handleBack} />;
            case "Test2kSkiErg":
                return <Test2kErg type="Ski" onBack={handleBack} />;
            case "Test2kRowErg":
                return <Test2kErg type="Row" onBack={handleBack} />;
            case "TestVAM":
                return <TestVAM onBack={handleBack} />;
            case "Test10kRun":
                return <Test10kRun onBack={handleBack} />;
            case "TestSprintSledPush":
                return <TestSprintSledPush onBack={handleBack} />;
            case "TestSprintSledPullDrag":
                return <TestSprintSledPullDrag onBack={handleBack} />;
            case "TestCargaMaximaSledPush":
                return <TestCargaMaximaSledPush onBack={handleBack} />;
            case "TestCargaMaximaSledPullDrag":
                return <TestCargaMaximaSledPullDrag onBack={handleBack} />;
            case "TestFTPBikeErg":
                return <TestFTPBikeErg onBack={handleBack} />;
            default:
                const test = testsData.find(t => t.id === selectedTestId);
                return (
                     <div className="p-4">
                        <div className="border-2 border-sky-400 rounded-lg p-8 text-center">
                            <h2 className="text-amber-400 text-2xl mb-4">{test?.title || 'Test no encontrado'}</h2>
                            <p className="text-gray-400 mb-6">Esta página de test está en construcción.</p>
                            <button 
                                onClick={handleBack}
                                className="bg-amber-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-amber-500 transition-colors"
                            >
                                Volver
                            </button>
                        </div>
                    </div>
                );
        }
    }
    
    if (selectedTestId) {
        return renderSelectedTest();
    }

    return (
        <div className="bg-[#0c0c0c] min-h-screen text-white font-sans">
            <div className="text-center p-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">Test VAM & Ergómetros</h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">Selecciona un test para ver los detalles e introducir tus resultados.</p>
            </div>
            
            <div className="px-4 sm:px-8 pb-8">
                 <div className="max-w-7xl mx-auto border-2 border-gray-800 rounded-lg bg-gray-900/50 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                        <h3 className="font-bold text-amber-400">Gestión de Datos</h3>
                        <p className="text-gray-400 text-sm">Guarda una copia de seguridad de tus resultados o impórtalos.</p>
                    </div>
                    <div className="flex gap-3">
                        <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".json" className="hidden" />
                        <button onClick={handleImportClick} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">Importar</button>
                        <button onClick={handleExport} className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 px-4 rounded-lg transition-colors">Exportar</button>
                    </div>
                </div>
            </div>

           <TestsGrid onTestSelect={setSelectedTestId} />

           {toastMessage && (
                <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-gray-800 text-white py-2 px-5 rounded-lg shadow-lg border border-amber-400 animate-toast z-50">
                    {toastMessage}
                </div>
            )}
        </div>
    );
};

export default TestsPage;