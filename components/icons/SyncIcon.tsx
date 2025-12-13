import React from 'react';

const SyncIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5M4 4l1.72 1.72a9 9 0 0112.56 0M20 20l-1.72-1.72a9 9 0 00-12.56 0" />
    </svg>
);

export default SyncIcon;