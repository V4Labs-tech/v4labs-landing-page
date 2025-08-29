'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic

// This is a placeholder. In a real app, you'd get this from your state management or context.
const addBlog = (blog: { title: string; content: string; imageUrl: string }) => {
  console.log('New blog to add:', blog);
  // Here you would typically update your global state or send data to your backend API.
};

// FIX: Dynamically import the TextEditor component with SSR turned off
const TextEditor = dynamic(() => import('../../TextEditor'), { 
    ssr: false,
    loading: () => <p className="text-gray-400">Loading Editor...</p> // Optional loading state
});

function NewBlogPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    // In a real app, you'd get a proper image URL, maybe from an upload.
    const newBlog = { title, content, imageUrl: `https://placehold.co/800x400/000000/0AF5AD?text=${title.replace(/\s/g, '+')}` };
    addBlog(newBlog);
    router.push('/dashboard'); // Redirect back to the dashboard after saving
  };

  return (
    <div className="animate-fade-in w-full min-w-0 p-4 md:p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Create New Blog</h1>
      </div>
      <div className="space-y-6">
        <TextEditor content={content} onChange={setContent} />
      </div>
        <Button onClick={handleSave} className="bg-primary text-white hover:bg-[#08d49a]">
          Save & Publish
        </Button>
    </div>
  );
}

export default NewBlogPage;
