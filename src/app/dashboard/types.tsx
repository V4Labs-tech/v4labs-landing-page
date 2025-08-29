import { ReactNode } from "react";

export interface Blog {
    id: number;
    title: string;
    content: string;
    imageUrl: string;
}

export interface Testimonial {
    id: number;
    author: string;
    content: string;
    imageUrl: string;
}

export interface CountUpProps {
    end: number;
    duration?: number;
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

export interface ViewDialogProps {
    isOpen: boolean;
    onClose: () => void;
    item: Blog | Testimonial | null;
}

export type BlogFormData = Omit<Blog, 'id'>;
export interface BlogFormProps {
    onSubmit: (data: BlogFormData) => void;
    onCancel: () => void;
    initialData?: Blog | null;
}

export type TestimonialFormData = Omit<Testimonial, 'id'>;

export interface TestimonialFormProps {
    onSubmit: (data: TestimonialFormData) => void;
    onCancel: () => void;
    initialData?: Testimonial | null;
}

export interface DashboardProps {
    blogCount: number;
    testimonialCount: number;
}

export interface BlogsProps {
  blogs: Blog[];
  onAdd: (blog: BlogFormData) => void;
  onUpdate: (updatedBlog: Blog) => void;
  onDelete: (id: number) => void;
  onView: (blog: Blog) => void;
}

export interface TestimonialsProps {
    testimonials: Testimonial[];
    onAdd: (testimonial: TestimonialFormData) => void;
    onUpdate: (testimonial: Testimonial) => void;
    onDelete: (id: number) => void;
    onView: (testimonial: Testimonial) => void;
}

export interface SidebarProps {
    activeView: string;
    setActiveView: (view: string) => void;
    isSidebarOpen: boolean;
    setSidebarOpen: (isOpen: boolean) => void;
}


export const initialBlogs: Blog[] = [
    { id: 1, title: 'The Future of AI', content: 'Artificial Intelligence is rapidly evolving. From machine learning to deep learning, the possibilities are endless. This blog post explores the future trends in AI and their potential impact on society.', imageUrl: 'https://placehold.co/800x400/000000/0AF5AD?text=Future+of+AI' },
    { id: 2, title: 'Getting Started with React', content: 'React has become one of the most popular JavaScript libraries for building user interfaces. This guide will walk you through the basics of setting up a React project and creating your first component.', imageUrl: 'https://placehold.co/800x400/000000/0AF5AD?text=React+Guide' },
    { id: 3, title: 'A Guide to Sustainable Living', content: 'Sustainable living is about reducing your environmental impact. This post provides practical tips on how to live a more eco-friendly lifestyle, from reducing waste to conserving energy.', imageUrl: 'https://placehold.co/800x400/000000/0AF5AD?text=Eco+Living' },
];

export const initialTestimonials: Testimonial[] = [
    { id: 1, author: 'Jane Doe, CEO of TechCorp', content: 'Working with V4Labs has been a transformative experience. Their expertise and dedication are unmatched.', imageUrl: 'https://placehold.co/100x100/000000/0AF5AD?text=JD' },
    { id: 2, author: 'John Smith, Founder of Innovate Inc.', content: 'The team delivered a high-quality product on time and on budget. I highly recommend their services.', imageUrl: 'https://placehold.co/100x100/000000/0AF5AD?text=JS' },
];
