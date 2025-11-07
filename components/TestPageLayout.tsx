import React from 'react';

interface TestPageLayoutProps {
    onBack: () => void;
    title: string;
    children: React.ReactNode;
}

const TestPageLayout: React.FC<TestPageLayoutProps> = ({ onBack, title, children }) => {
    return (
        <div className="bg-black min-h-screen text-white font-sans animate-fade-in-fast">
            <header className="relative bg-black p-4 py-8 flex items-center justify-center border-b-2 border-gray-800">
                <button 
                    onClick={onBack} 
                    className="absolute top-1/2 left-4 -translate-y-1/2 text-amber-400 text-2xl sm:text-3xl font-bold z-10 p-2"
                    aria-label="Volver a la lista de tests"
                >
                    ‹
                </button>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-wide text-center px-10 sm:px-12">
                    {title}
                </h1>
            </header>
            <main className="p-4 md:p-6 max-w-4xl mx-auto">
                {children}
            </main>
        </div>
    );
};

export default TestPageLayout;