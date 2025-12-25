'use client';

import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
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
      <Avatar className="h-32 w-32 border-2 border-dashed border-muted-foreground/30">
        <AvatarImage src={preview || ''} className="object-cover" />
        <AvatarFallback className="bg-muted">
          <MdCloudUpload className="h-10 w-10 text-muted-foreground" />
        </AvatarFallback>
      </Avatar>

      {!disabled && (
        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
          >
            Upload Photo
          </Button>
          {preview && (
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="h-9 w-9"
              onClick={handleRemove}
            >
              <MdDelete className="h-4 w-4" />
            </Button>
          )}
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
      )}
    </div>
  );
}
