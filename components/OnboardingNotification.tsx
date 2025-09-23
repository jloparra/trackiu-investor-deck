import React from 'react';

export const OnboardingNotification = () => {
    return (
        <div className="fixed bottom-5 left-5 bg-gray-800 text-white p-3 rounded-lg shadow-lg text-sm z-50 animate-fade-in-up">
            <p><strong>Pro Tip:</strong> Use <kbd className="font-sans bg-gray-600 rounded px-1.5 py-0.5">←</kbd> <kbd className="font-sans bg-gray-600 rounded px-1.5 py-0.5">→</kbd> to navigate.</p>
        </div>
    );
};