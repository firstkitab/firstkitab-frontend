'use client';

import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MdDelete, MdPerson } from 'react-icons/md';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface ImageUploaderProps {
  value?: string | null;
  onChange?: (value: string | null) => void;
  disabled?: boolean;
}

export default function ImageUploader({ value, onChange, disabled }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(value || null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        onChange?.(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    setPreview(null);
    onChange?.(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative group">
        <Avatar className="h-32 w-32 border-2 border-dashed border-muted-foreground/30">
          <AvatarImage src={preview || undefined} className="object-cover" />
          <AvatarFallback className="bg-muted">
            <MdPerson className="h-10 w-10 text-muted-foreground" />
          </AvatarFallback>
        </Avatar>
        {preview && !disabled && (
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="absolute inset-0 m-auto h-10 w-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm shadow-sm hover:bg-background"
            onClick={handleRemove}
          >
            <MdDelete className="h-5 w-5 text-foreground" />
          </Button>
        )}
      </div>

      {!disabled && (
        <>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
          >
            {preview ? 'Change Photo' : 'Upload Photo'}
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </>
      )}
    </div>
  );
}
