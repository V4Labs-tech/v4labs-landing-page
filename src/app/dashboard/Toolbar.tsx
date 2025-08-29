'use client';

import { Editor } from '@tiptap/react';
import { 
    Bold, Strikethrough, Italic, Code, List, ListOrdered,
    Link, Image as ImageIcon, FileText, ChevronDown 
} from 'lucide-react';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import '@tiptap/extension-image';

// Import the separate modal component
import ActionModal, { ModalProps } from './blogs/ActionModal';

// --- Type Definitions ---
declare module '@tiptap/core' {
  interface ChainedCommands1 {
    setImage: (options: { src: string; alt?: string; title?: string }) => ChainedCommands1;
  }
}

type ModalConfig = Omit<ModalProps, 'isOpen' | 'onClose'>;

interface HeadingOption {
  label: string;
  action: () => void;
  isActive: boolean;
}

// --- Helper Components (defined in the same file) ---

const ToolbarButton = ({ onClick, isActive, children, title }: { 
    onClick: () => void; 
    isActive: boolean; 
    children: React.ReactNode; 
    title: string; 
}) => (
    <button 
        type="button" 
        onClick={onClick} 
        className={`p-2 rounded ${isActive ? 'bg-gray-300 text-black' : 'hover:bg-white'}`} 
        title={title}
    >
        {children}
    </button>
);

const HeadingButtonDropdown = ({ editor }: { editor: Editor }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentStyle = useCallback(() => {
        for (let i = 1; i <= 4; i++) {
            if (editor.isActive('heading', { level: i as 1 | 2 | 3 | 4 })) {
                return `Heading ${i}`;
            }
        }
        return 'P';
    }, [editor]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleStyle = (level?: 1 | 2 | 3 | 4) => {
        if (level) {
            editor.chain().focus().toggleHeading({ level }).run();
        } else {
            editor.chain().focus().setParagraph().run();
        }
        setIsOpen(false);
    };

    const options: HeadingOption[] = [
        { label: 'P', action: () => toggleStyle(), isActive: editor.isActive('paragraph') },
        { label: 'H1', action: () => toggleStyle(1), isActive: editor.isActive('heading', { level: 1 }) },
        { label: 'H2', action: () => toggleStyle(2), isActive: editor.isActive('heading', { level: 2 }) },
        { label: 'H3', action: () => toggleStyle(3), isActive: editor.isActive('heading', { level: 3 }) },
        { label: 'H4', action: () => toggleStyle(4), isActive: editor.isActive('heading', { level: 4 }) },
    ];

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 w-13 text-left rounded flex items-center justify-between bg-primary text-black border border-gray-700 hover:bg-white hover:text-black"
            >
                <span>{currentStyle()}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="absolute top-full mt-2 w-full bg-primary border border-gray-600 rounded-md shadow-lg z-10">
                    {options.map((option) => (
                        <button key={option.label} onClick={option.action} className={`block w-full text-left px-3 py-2 text-sm text-black hover:bg-white ${option.isActive ? 'bg-white' : ''}`}>
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

// --- Main Toolbar Component ---
const Toolbar = ({ editor }: { editor: Editor | null }) => {
    const [modalConfig, setModalConfig] = useState<ModalConfig | null>(null);

    if (!editor) {
        return null;
    }
    
    const openModal = (type: 'link' | 'image' | 'doc') => {
        let config: ModalConfig | null = null;
        switch (type) {
            case 'image':
                config = {
                    title: 'Add Image', label: 'Image URL', buttonText: 'Add Image',
                    onSubmit: (url: string) => editor.chain().focus().setImage({ src: url }).run(),
                };
                break;
            case 'link':
                config = {
                    title: 'Set Link', label: 'URL', buttonText: 'Set Link', initialValue: editor.getAttributes('link').href || '',
                    onSubmit: (url: string) => {
                        if (url) { editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run(); } 
                        else { editor.chain().focus().extendMarkRange('link').unsetLink().run(); }
                    },
                };
                break;
            case 'doc':
                 config = {
                    title: 'Add Document Link', label: 'Document URL', buttonText: 'Add Document',
                    onSubmit: (url: string) => editor.chain().focus().insertContent(`<a href="${url}" target="_blank" rel="noopener noreferrer">View Document</a>`).run(),
                };
                break;
        }
        setModalConfig(config);
    };
    
    const closeModal = () => setModalConfig(null);

    return (
        <>
            <div className="rounded-t-md border border-gray-700 bg-primary p-2 flex flex-wrap items-center gap-2">
                <HeadingButtonDropdown editor={editor} />
                <div className="w-[1px] h-6 bg-gray-600" />

                <ToolbarButton title="Bold" onClick={() => editor.chain().focus().toggleBold().run()} isActive={editor.isActive('bold')}><Bold className="w-5 h-5" /></ToolbarButton>
                <ToolbarButton title="Italic" onClick={() => editor.chain().focus().toggleItalic().run()} isActive={editor.isActive('italic')}><Italic className="w-5 h-5" /></ToolbarButton>
                <ToolbarButton title="Strikethrough" onClick={() => editor.chain().focus().toggleStrike().run()} isActive={editor.isActive('strike')}><Strikethrough className="w-5 h-5" /></ToolbarButton>
                <ToolbarButton title="Code" onClick={() => editor.chain().focus().toggleCode().run()} isActive={editor.isActive('code')}><Code className="w-5 h-5" /></ToolbarButton>
                
                <div className="w-[1px] h-6 bg-gray-600" />
                <ToolbarButton title="Bulleted List" onClick={() => editor.chain().focus().toggleBulletList().run()} isActive={editor.isActive('bulletList')}><List className="w-5 h-5" /></ToolbarButton>
                <ToolbarButton title="Numbered List" onClick={() => editor.chain().focus().toggleOrderedList().run()} isActive={editor.isActive('orderedList')}><ListOrdered className="w-5 h-5" /></ToolbarButton>
                <div className="w-[1px] h-6 bg-gray-600" />

                <ToolbarButton title="Add Link" onClick={() => openModal('link')} isActive={editor.isActive('link')}><Link className="w-5 h-5" /></ToolbarButton>
                <ToolbarButton title="Add Image" onClick={() => openModal('image')} isActive={false}><ImageIcon className="w-5 h-5" /></ToolbarButton>
                <ToolbarButton title="Add Document Link" onClick={() => openModal('doc')} isActive={false}><FileText className="w-5 h-5" /></ToolbarButton>
            </div>
            
            {modalConfig && (
                <ActionModal
                    isOpen={!!modalConfig}
                    onClose={closeModal}
                    {...modalConfig}
                />
            )}
        </>
    );
};

export default Toolbar;