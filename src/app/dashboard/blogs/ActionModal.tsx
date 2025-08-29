'use client';

import React, { useState, useEffect } from 'react';

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (value: string) => void;
    title: string;
    label: string;
    buttonText: string;
    initialValue?: string;
}

const ActionModal = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    label,
    buttonText,
    initialValue = ''
}: ModalProps) => {
    const [inputValue, setInputValue] = useState(initialValue);

    // Effect to update the input's value if the initialValue prop changes.
    // This is useful for the "Set Link" functionality to show the existing URL.
    useEffect(() => {
        setInputValue(initialValue);
    }, [initialValue]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(inputValue);
        onClose(); // Close the modal after submission
    };

    return (
        // Overlay: fills the screen and closes the modal on click
        <div 
            onClick={onClose} 
            className="fixed inset-0 backdrop-blur-md bg-opacity-60 z-50 flex justify-center items-center p-4"
        >
            {/* Modal Box: stops click propagation to prevent closing */}
            <div 
                onClick={(e) => e.stopPropagation()} 
                className="bg-gray-950 p-6 rounded-lg shadow-xl w-full max-w-md"
            >
                <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="url-input" className="block text-sm font-medium text-gray-300 mb-2">
                        {label}
                    </label>
                    <input
                        id="url-input"
                        type="url"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                        autoFocus
                    />
                    <div className="mt-6 flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded bg-primary text-black hover:bg-green-400"
                        >
                            {buttonText}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ActionModal;