import React from 'react';

// A very basic Markdown to HTML converter
const renderMarkdown = (text: string) => {
    // The regex uses the 's' flag (dotAll) to make '.' match newlines, which is crucial for multi-line block replacements.
    const html = text
        .replace(/^\s*####\s+(.*)/gm, '<h4 class="text-md font-bold text-white mt-3 mb-1">$1</h4>')
        .replace(/^\s*###\s+(.*)/gm, '<h3 class="text-lg font-bold text-white mt-4 mb-2">$1</h3>')
        .replace(/^\s*##\s+(.*)/gm, '<h2 class="text-xl font-bold text-white mt-6 mb-3">$1</h2>')
        .replace(/^\s*#\s+(.*)/gm, '<h1 class="text-2xl font-bold text-white mb-4">$1</h1>')
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-400">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Process list items. Capture all consecutive list items into one group.
        .replace(/(^\s*[\-\*]\s+.*\n?)+/gm, (match) => {
            const items = match.trim().split('\n').map(item => `<li class="mb-1">${item.replace(/^\s*[\-\*]\s+/, '')}</li>`).join('');
            return `<ul class="list-disc list-inside pl-4 my-3">${items}</ul>`;
        })
        .replace(/\n/g, '<br />') // Convert remaining newlines
        .replace(/<br \/>(\s*<[uoh]l>)/g, '$1') // Clean up extra breaks before lists
        .replace(/(<\/[uoh]l>)<br \/>/g, '$1'); // Clean up extra breaks after lists


    return { __html: html };
};


interface ExplanationModalProps {
    isOpen: boolean;
    isLoading: boolean;
    content: string;
    onClose: () => void;
}

const ExplanationModal: React.FC<ExplanationModalProps> = ({ isOpen, isLoading, content, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in-fast" onClick={onClose} aria-modal="true" role="dialog">
            <div 
                className="bg-gray-900 border-2 border-amber-400 rounded-2xl p-6 w-full max-w-2xl mx-auto max-h-[90vh] overflow-y-auto" 
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-700">
                    <h3 className="text-amber-400 font-bold text-lg">Análisis del Entreno con IA</h3>
                    <button onClick={onClose} className="text-amber-400 text-3xl leading-none p-1" aria-label="Cerrar">&times;</button>
                </div>

                {isLoading ? (
                    <div className="flex flex-col items-center justify-center h-64">
                        <div className="w-12 h-12 border-4 border-t-amber-400 border-gray-600 rounded-full animate-spin"></div>
                        <p className="mt-4 text-gray-400">Analizando el entrenamiento...</p>
                    </div>
                ) : (
                    <div className="text-gray-300 space-y-4 leading-relaxed" dangerouslySetInnerHTML={renderMarkdown(content)} />
                )}
            </div>
        </div>
    );
};

export default ExplanationModal;
