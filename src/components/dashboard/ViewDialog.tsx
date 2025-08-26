import { ViewDialogProps } from '@/app/dashboard/types';
import React from 'react'
import Modal from './Modal';

function ViewDialog({ isOpen, onClose, item }: ViewDialogProps) {
    if (!item) return null;
    const isBlog = 'title' in item;

    
  return (
        <Modal isOpen={isOpen} onClose={onClose} title={isBlog ? "Blog Post" : "Testimonial"}>
            <div className="text-gray-300 space-y-4">
                {item.imageUrl && (
                    <img src={item.imageUrl} alt={isBlog ? item.title : item.author} className="w-full h-auto max-h-64 object-cover rounded-md mb-4" />
                )}
                <h2 className="text-2xl font-bold text-white">{isBlog ? item.title : item.author}</h2>
                <p className="text-base leading-relaxed">{item.content}</p>
            </div>
        </Modal>
    );
}

export default ViewDialog