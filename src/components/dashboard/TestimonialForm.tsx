import { TestimonialFormProps } from '@/app/dashboard/types';
import React, { useState } from 'react'

function TestimonialForm({ onSubmit, onCancel, initialData }:TestimonialFormProps) {
    const [author, setAuthor] = useState(initialData?.author || '');
    const [content, setContent] = useState(initialData?.content || '');
    const [preview, setPreview] = useState<string | null>(initialData?.imageUrl || null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({ author, content, imageUrl: preview || 'https://placehold.co/100x100/000000/0AF5AD?text=New' });
    };

  return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-300 mb-1">Author</label>
                <input id="author" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="w-full bg-[#2a2a2a] border border-gray-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-[#0AF5AD] focus:border-[#0AF5AD] transition" required />
            </div>
            <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-1">Content</label>
                <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} rows={4} className="w-full bg-[#2a2a2a] border border-gray-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-[#0AF5AD] focus:border-[#0AF5AD] transition" required />
            </div>
            <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-300 mb-1">Author Image</label>
                <input id="image" type="file" onChange={handleImageChange} accept="image/*" className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#0AF5AD] file:text-black hover:file:bg-[#08d49a] transition" />
                {preview && <img src={preview} alt="Preview" className="mt-4 w-24 h-24 object-cover rounded-full" />}
            </div>
            <div className="flex justify-end gap-4 pt-4">
                <button type="button" onClick={onCancel} className="px-4 py-2 rounded-md text-gray-300 bg-gray-700 hover:bg-gray-600 transition">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded-md text-black bg-[#0AF5AD] hover:bg-[#08d49a] font-semibold transition shadow-[0_0_10px_#0AF5AD]">
                    {initialData ? 'Update Testimonial' : 'Add Testimonial'}
                </button>
            </div>
        </form>
    );
}

export default TestimonialForm