import { Testimonial, TestimonialFormData, TestimonialsProps } from '@/app/dashboard/types';
import { Edit, Plus, Trash2 } from 'lucide-react';
import React, { useState } from 'react';
import Modal from './Modal';
import TestimonialForm from './TestimonialForm';

// Import shadcn/ui components
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

function Testimonials({ testimonials, onAdd, onUpdate, onDelete, onView }: TestimonialsProps) {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);

    const handleAddClick = () => {
        setEditingTestimonial(null);
        setIsFormOpen(true);
    };

    const handleEditClick = (testimonial: Testimonial) => {
        setEditingTestimonial(testimonial);
        setIsFormOpen(true);
    };

    const handleFormSubmit = (testimonialData: TestimonialFormData) => {
        if (editingTestimonial) {
            onUpdate({ ...editingTestimonial, ...testimonialData });
        } else {
            onAdd(testimonialData);
        }
        setIsFormOpen(false);
        setEditingTestimonial(null);
    };

    return (
        <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-white">Testimonials</h1>
                {/* shadcn/ui Button with custom theme styling */}
                <Button
                    onClick={handleAddClick}
                    className="flex items-center gap-2 bg-[#0AF5AD] text-black hover:bg-[#08d49a] font-semibold transition"
                >
                    <Plus size={20} /> Add Testimonial
                </Button>
            </div>
            {/* The container div maintains the dark theme for the table */}
            <div className="rounded-lg border border-gray-800">
                <Table>
                    <TableHeader>
                        <TableRow className="border-gray-800 hover:bg-gray-800/50">
                            <TableHead className="w-[250px] text-white">Author</TableHead>
                            <TableHead className="text-white">Content Snippet</TableHead>
                            <TableHead className="text-right text-white">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {testimonials.map(testimonial => (
                            <TableRow
                                key={testimonial.id}
                                className="border-gray-800 cursor-pointer text-gray-300 hover:bg-gray-800/50"
                                onClick={() => onView(testimonial)}
                            >
                                <TableCell className="font-medium text-white">{testimonial.author}</TableCell>
                                <TableCell>{testimonial.content.substring(0, 70)}...</TableCell>
                                <TableCell className="text-right" onClick={e => e.stopPropagation()}>
                                    <div className="flex justify-end gap-2">
                                        {/* shadcn/ui Buttons for actions */}
                                        <Button variant="ghost" size="icon" onClick={() => handleEditClick(testimonial)} className="text-gray-400 hover:text-[#0AF5AD] hover:bg-gray-700">
                                            <Edit size={18} />
                                        </Button>
                                        <Button variant="ghost" size="icon" onClick={() => onDelete(testimonial.id)} className="text-gray-400 hover:text-red-500 hover:bg-gray-700">
                                            <Trash2 size={18} />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <Modal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} title={editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}>
                <TestimonialForm onSubmit={handleFormSubmit} onCancel={() => setIsFormOpen(false)} initialData={editingTestimonial} />
            </Modal>
        </div>
    );
}

export default Testimonials;
