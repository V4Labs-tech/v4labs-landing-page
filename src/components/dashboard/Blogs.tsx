import { Blog, BlogFormData, BlogsProps } from '@/app/dashboard/types';
import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import BlogForm from './BlogForm';
import { Edit, Plus, Trash2 } from 'lucide-react';

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

// Custom hook to check for media queries
const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        // This code only runs on the client, preventing SSR errors
        if (typeof window !== 'undefined') {
            const media = window.matchMedia(query);
            if (media.matches !== matches) {
                setMatches(media.matches);
            }
            const listener = () => setMatches(media.matches);
            window.addEventListener('resize', listener);
            return () => window.removeEventListener('resize', listener);
        }
        return () => {};
    }, [matches, query]);

    return matches;
};

function Blogs({ blogs, onAdd, onUpdate, onDelete, onView }: BlogsProps) {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
    // Check if the screen width is 768px or less
    const isMobile = useMediaQuery('(max-width: 768px)');

    const handleAddClick = () => {
        setEditingBlog(null);
        setIsFormOpen(true);
    };

    const handleEditClick = (blog: Blog) => {
        setEditingBlog(blog);
        setIsFormOpen(true);
    };

    const handleFormSubmit = (blogData: BlogFormData) => {
        if (editingBlog) {
            onUpdate({ ...editingBlog, ...blogData });
        } else {
            onAdd(blogData);
        }
        setIsFormOpen(false);
        setEditingBlog(null);
    };

    return (
        // FIX: Added flex, flex-col, and min-w-0 to ensure proper shrinking and layout
        <div className="animate-fade-in w-full flex flex-col min-w-0">
            {/* Header: Set to not shrink */}
            <div className="flex-shrink-0 flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
                <h1 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">Blogs</h1>
                <Button
                    onClick={handleAddClick}
                    className="flex items-center gap-2 bg-[#0AF5AD] text-black hover:bg-[#08d49a] font-semibold transition w-full sm:w-auto"
                >
                    <Plus size={20} />
                    <span>Add Blog</span>
                </Button>
            </div>

            {/* Responsive Table Container */}
            <div className="rounded-lg border border-gray-800 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow className="border-gray-800 hover:bg-transparent">
                            <TableHead style={{ minWidth: '200px' }} className="text-white">Title</TableHead>
                            <TableHead style={{ minWidth: '300px' }} className="text-white">Content Snippet</TableHead>
                            <TableHead style={{ minWidth: '120px' }} className="text-right text-white">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {blogs.map(blog => (
                            <TableRow
                                key={blog.id}
                                className="border-gray-800 cursor-pointer text-gray-300 hover:bg-gray-800/50"
                                onClick={() => onView(blog)}
                            >
                                <TableCell className="font-medium text-white whitespace-nowrap">{blog.title}</TableCell>
                                {/* Conditionally shorten the snippet text on mobile screens */}
                                <TableCell className="whitespace-nowrap">{blog.content.substring(0, isMobile ? 25 : 70)}...</TableCell>
                                <TableCell className="text-right" onClick={e => e.stopPropagation()}>
                                    <div className="flex justify-end gap-2">
                                        <Button variant="ghost" size="icon" onClick={() => handleEditClick(blog)} className="text-gray-400 hover:text-[#0AF5AD] hover:bg-gray-700">
                                            <Edit size={18} />
                                        </Button>
                                        <Button variant="ghost" size="icon" onClick={() => onDelete(blog.id)} className="text-gray-400 hover:text-red-500 hover:bg-gray-700">
                                            <Trash2 size={18} />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <Modal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} title={editingBlog ? 'Edit Blog' : 'Add New Blog'}>
                <BlogForm onSubmit={handleFormSubmit} onCancel={() => setIsFormOpen(false)} initialData={editingBlog} />
            </Modal>
        </div>
    );
}

export default Blogs;
