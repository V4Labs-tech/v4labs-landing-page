'use client';

import React, { useState } from 'react'
import { Blog, BlogFormData, initialBlogs, initialTestimonials, Testimonial, TestimonialFormData } from './types';
import Blogs from '@/components/dashboard/Blogs';
import Testimonials from '@/components/dashboard/Testimonials';
import Dashboard from '@/components/dashboard/Dashboard';
import ViewDialog from '@/components/dashboard/ViewDialog';
import { Menu, X } from 'lucide-react';
import Sidebar from '@/components/dashboard/Sidebar';

function Page() {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [activeView, setActiveView] = useState<string>('dashboard');
  const [viewingItem, setViewingItem] = useState<Blog | Testimonial | null>(null);
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  // CRUD for Blogs
  const addBlog = (blog: BlogFormData) => setBlogs([...blogs, { ...blog, id: Date.now() }]);
  const updateBlog = (updatedBlog: Blog) => setBlogs(blogs.map(b => b.id === updatedBlog.id ? updatedBlog : b));
  const deleteBlog = (id: number) => setBlogs(blogs.filter(b => b.id !== id));

  // CRUD for Testimonials
  const addTestimonial = (testimonial: TestimonialFormData) => setTestimonials([...testimonials, { ...testimonial, id: Date.now() }]);
  const updateTestimonial = (updatedTestimonial: Testimonial) => setTestimonials(testimonials.map(t => t.id === updatedTestimonial.id ? updatedTestimonial : t));
  const deleteTestimonial = (id: number) => setTestimonials(testimonials.filter(t => t.id !== id));

  const renderView = () => {
    switch (activeView) {
      case 'blogs':
        return <Blogs blogs={blogs} onAdd={addBlog} onUpdate={updateBlog} onDelete={deleteBlog} onView={setViewingItem} />;
      case 'testimonials':
        return <Testimonials testimonials={testimonials} onAdd={addTestimonial} onUpdate={updateTestimonial} onDelete={deleteTestimonial} onView={setViewingItem} />;
      case 'dashboard':
      default:
        return <Dashboard blogCount={blogs.length} testimonialCount={testimonials.length} />;
    }
  };
  return (
    <div className="bg-gray-950 min-h-screen text-white font-sans flex w-full overflow-x-auto">
      <style>{`
                @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
                @keyframes fade-in-down { 0% { opacity: 0; transform: translateY(-20px); } 100% { opacity: 1; transform: translateY(0); } }
                .animate-fade-in { animation: fade-in 0.5s ease-out; }
                .animate-fade-in-down { animation: fade-in-down 0.3s ease-out; }
            `}</style>

      <Sidebar activeView={activeView} setActiveView={setActiveView} isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />

      <main className="flex-1 p-6 md:p-10 md:ml-64 transition-all duration-300">
        <div className="md:hidden flex justify-end items-center mb-4">
          {/* <h1 className="text-xl font-bold text-white">V4<span className="text-[#0AF5AD]">Labs</span></h1> */}
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-white z-50">
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {renderView()}
      </main>

      <ViewDialog isOpen={!!viewingItem} onClose={() => setViewingItem(null)} item={viewingItem} />
      {isSidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={() => setSidebarOpen(false)}></div>}
    </div>
  )
}

export default Page