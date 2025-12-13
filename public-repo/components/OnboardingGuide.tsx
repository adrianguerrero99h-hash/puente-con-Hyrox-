import React, { useState } from 'react';

interface OnboardingGuideProps {
    username: string;
    onFinish: () => void;
}

const tourSteps = [
    {
        title: "Navegación Principal",
        text: "Aquí puedes cambiar entre la vista de 'Entrenamientos' diarios y la sección de 'Tests y Ergómetros' para registrar tu progreso.",
        highlightStyle: {
            top: '64px',
            right: '16px',
            width: '240px',
            height: '64px',
            transform: 'translateY(-50%)',
        },
        tooltipStyle: {
            top: '110px',
            right: '16px',
        }
    },
    {
        title: "Navegación Semanal",
        text: "Navega rápidamente por los entrenamientos de la semana. Los días de descanso (verde) y los de carrera (naranja) tienen colores distintivos.",
        highlightStyle: {
            top: '150px',
            left: '50%',
            width: '95vw',
            maxWidth: '896px',
            height: '70px',
            transform: 'translateX(-50%)',
        },
         tooltipStyle: {
            top: '230px',
            left: '50%',
            transform: 'translateX(-50%)',
        }
    },
    {
        title: "Calendario y Compartir",
        text: "Usa el calendario para saltar a cualquier fecha. Con el icono de compartir, puedes enviar el entreno del día a tus amigos.",
        highlightStyle: {
            top: '100px',
            right: '16px',
            width: '100px',
            height: '50px',
        },
        tooltipStyle: {
            top: '160px',
            right: '16px',
        }
    },
    {
        title: "Glosario de Términos",
        text: "¿No entiendes 'RPE' o 'RH'? Despliega el glosario para ver todas las definiciones y escalas de intensidad.",
        highlightStyle: {
            top: '320px',
            left: '50%',
            width: '95vw',
            maxWidth: '896px',
            height: '70px',
            transform: 'translateX(-50%)',
        },
         tooltipStyle: {
            top: '400px',
            left: '50%',
            transform: 'translateX(-50%)',
        }
    },
     {
        title: "Secciones del Entrenamiento",
        text: "Cada entrenamiento está dividido en secciones. Puedes expandirlas o contraerlas para centrarte en lo que necesitas.",
        highlightStyle: {
            top: '440px',
            left: '50%',
            width: '95vw',
            maxWidth: '896px',
            height: '70px',
            transform: 'translateX(-50%)',
        },
         tooltipStyle: {
            top: '520px',
            left: '50%',
            transform: 'translateX(-50%)',
        }
    },
];

const OnboardingGuide: React.FC<OnboardingGuideProps> = ({ username, onFinish }) => {
    const [step, setStep] = useState(0);

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);
    
    const totalSteps = tourSteps.length;

    if (step > totalSteps + 1) {
        onFinish();
        return null;
    }
    
    const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

    // Welcome Modal
    if (step === 0) {
        return (
            <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 animate-fade-in-fast">
                <div className="bg-gray-900 border-2 border-amber-400 rounded-lg p-8 max-w-md w-full text-center">
                    <h1 className="text-3xl font-bold text-amber-400 mb-4">¡Bienvenido, {capitalize(username)}!</h1>
                    <p className="text-gray-300 mb-8">
                        Estamos encantados de tenerte a bordo. Antes de empezar, ¿quieres un rápido recorrido por la aplicación para conocer sus funciones?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button onClick={onFinish} className="w-full bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors">
                            Saltar Tour
                        </button>
                         <button onClick={nextStep} className="w-full bg-amber-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-amber-500 transition-colors">
                            Iniciar Tour
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Finish Modal
    if (step === totalSteps + 1) {
         return (
            <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 animate-fade-in-fast">
                <div className="bg-gray-900 border-2 border-amber-400 rounded-lg p-8 max-w-md w-full text-center">
                    <h1 className="text-3xl font-bold text-amber-400 mb-4">¡Todo listo!</h1>
                    <p className="text-gray-300 mb-8">
                        Ya conoces lo básico. ¡Explora la app y a por todas en tu entrenamiento!
                    </p>
                    <button onClick={onFinish} className="w-full bg-amber-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-amber-500 transition-colors">
                        Empezar a Entrenar
                    </button>
                </div>
            </div>
        );
    }
    
    const currentStep = tourSteps[step - 1];

    return (
        <div className="fixed inset-0 z-[99] animate-fade-in-fast">
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/80 z-[100]"></div>
            
            {/* Highlight Box */}
            <div 
                className="fixed border-4 border-amber-400 rounded-lg shadow-2xl shadow-amber-500/50 z-[101] pointer-events-none"
                style={currentStep.highlightStyle}
            ></div>

            {/* Tooltip */}
            <div 
                className="fixed bg-gray-900 border-2 border-gray-700 rounded-lg p-5 max-w-xs w-full z-[102] animate-fade-in-fast"
                style={currentStep.tooltipStyle}
            >
                <h3 className="text-lg font-bold text-amber-400 mb-2">{currentStep.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{currentStep.text}</p>
                
                <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Paso {step} de {totalSteps}</span>
                    <div className="flex gap-2">
                         {step > 1 && (
                            <button onClick={prevStep} className="bg-gray-700 text-white font-bold py-1 px-3 rounded-md hover:bg-gray-600 transition-colors text-sm">
                                Anterior
                            </button>
                        )}
                        <button onClick={nextStep} className="bg-amber-400 text-black font-bold py-1 px-3 rounded-md hover:bg-amber-500 transition-colors text-sm">
                            Siguiente
                        </button>
                    </div>
                </div>
                 <button onClick={onFinish} className="absolute -top-3 -right-3 bg-gray-800 rounded-full p-1 border-2 border-gray-600 text-white hover:bg-red-600 transition-colors" aria-label="Finalizar tour">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default OnboardingGuide;
