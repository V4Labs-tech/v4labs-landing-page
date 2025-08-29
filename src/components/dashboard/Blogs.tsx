import { Blog, BlogsProps } from '@/app/dashboard/types';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import the router
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
        if (typeof window !== 'undefined') {
            const media = window.matchMedia(query);
            if (media.matches !== matches) {
                setMatches(media.matches);
            }
            const listener = () => setMatches(media.matches);
            window.addEventListener('resize', listener);
            return () => window.removeEventListener('resize', listener);
        }
        return () => { };
    }, [matches, query]);

    return matches;
};

// Utility to strip HTML tags for a clean preview
const stripHtml = (html: string) => {
    if (typeof window !== 'undefined') {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    }
    return html; // Return as is during SSR
};

// MODIFIED: Removed onAdd and onUpdate from props as they are no longer needed here
function Blogs({ blogs, onDelete, onView }: BlogsProps) {
    const router = useRouter();
    const isMobile = useMediaQuery('(max-width: 768px)');

    // MODIFIED: This now navigates to the new blog page
    const handleAddClick = () => {
        router.push('/dashboard/blogs/new');
    };

    // MODIFIED: This now navigates to the dynamic edit page
    const handleEditClick = (blog: Blog) => {
        router.push(`/dashboard/blogs/edit/${blog.id}`);
    };

    return (
        <div className="animate-fade-in w-full flex flex-col min-w-0">
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
                                <TableCell className="whitespace-nowrap">
                                    {/* MODIFIED: Use stripHtml to show a clean text preview */}
                                    {stripHtml(blog.content).substring(0, isMobile ? 25 : 70)}...
                                </TableCell>
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
            {/* REMOVED: The Modal and BlogForm are no longer rendered here */}
        </div>
    );
}

export default Blogs;
