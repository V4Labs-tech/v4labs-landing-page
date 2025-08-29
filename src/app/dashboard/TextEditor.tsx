'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';
import Toolbar from './Toolbar';

interface TextEditorProps {
  content: string;
  onChange: (richText: string) => void;
}

const TextEditor = ({ content, onChange }: TextEditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    // FIX: Added immediatelyRender: false to prevent hydration errors
    immediatelyRender: false, 
    editorProps: {
      attributes: {
        class:
          'prose prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl my-5 focus:outline-none rounded-b-md border border-gray-700 bg-[#1a1a1a] p-4 min-h-[300px] text-white',
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="flex flex-col justify-stretch">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TextEditor;
