// app/dashboard/blogs/edit/[id]/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Blog } from '@/app/dashboard/types'; // Make sure this path is correct
import TextEditor from '@/app/dashboard/TextEditor';

// --- In a real app, you would get these from a global state (Context/Zustand) or API ---
// For now, we'll just define placeholder functions.
const getBlogById = (id: number): Blog | undefined => {
  // This is a placeholder. You need to fetch the actual blog from your main state.
  console.log(`Fetching blog with ID: ${id}`);
  return undefined; 
};
const updateBlog = (updatedBlog: Blog) => {
  console.log('Blog to update:', updatedBlog);
};
// --- End of placeholder section ---

function EditBlogPage() {
  const router = useRouter();
  const params = useParams(); // Hook to get URL parameters
  const blogId = Number(params.id); // Get the blog ID from the URL

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (blogId) {
      // In a real app, you'd fetch this from your global state or an API
      const existingBlog = getBlogById(blogId); 
      if (existingBlog) {
        setTitle(existingBlog.title);
        setContent(existingBlog.content);
      }
      setIsLoading(false);
    }
  }, [blogId]);

  const handleUpdate = () => {
    const updatedData = { id: blogId, title, content, imageUrl: '' }; // Update image logic as needed
    updateBlog(updatedData);
    router.push('/dashboard'); // Go back to the dashboard
  };

  if (isLoading) {
    return <div className="p-8 text-white">Loading editor...</div>;
  }

  return (
    <div className="animate-fade-in w-full min-w-0 p-4 md:p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Edit Blog Post</h1>
        <Button onClick={handleUpdate} className="bg-[#0AF5AD] text-black hover:bg-[#08d49a]">
          Update Post
        </Button>
      </div>
      <div className="space-y-6">
        <Input
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-[#1a1a1a] border-gray-700 text-white text-2xl font-bold h-14"
        />
        {/* Only render the editor once the content has been loaded */}
        {content && <TextEditor content={content} onChange={setContent} />}
      </div>
    </div>
  );
}

export default EditBlogPage;