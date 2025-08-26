import { ModalProps } from '@/app/dashboard/types';
import { X } from 'lucide-react';

function Modal({ isOpen, onClose, title, children }:ModalProps) {
    if (!isOpen) return null;
  return (
        <div className="fixed inset-0 backdrop-blur-md bg-opacity-70 z-50 flex justify-center items-center p-4">
            <div className="bg-[#1a1a1a] border border-gray-700 rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto relative animate-fade-in-down">
                <div className="flex justify-between items-center p-4 border-b border-gray-700 sticky top-0 bg-[#1a1a1a] z-10">
                    <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal