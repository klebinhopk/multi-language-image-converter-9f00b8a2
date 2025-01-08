import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";
import { toast } from "sonner";

interface DropZoneProps {
  onFilesAccepted: (files: File[]) => void;
  maxFiles?: number;
  accept?: Record<string, string[]>;
}

export function DropZone({ onFilesAccepted, maxFiles = 10, accept }: DropZoneProps) {
  const [isDragging, setIsDragging] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > maxFiles) {
      toast.error(`Maximum ${maxFiles} files allowed`);
      return;
    }
    onFilesAccepted(acceptedFiles);
  }, [maxFiles, onFilesAccepted]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    maxFiles,
    onDragEnter: () => setIsDragging(true),
    onDragLeave: () => setIsDragging(false),
  });

  return (
    <div
      {...getRootProps()}
      className={`drop-zone ${isDragging ? "active" : ""} animate-fade-up`}
    >
      <input {...getInputProps()} />
      <Upload className="w-12 h-12 mb-4 text-muted-foreground" />
      <p className="text-lg font-medium">Drag & drop images here</p>
      <p className="text-sm text-muted-foreground mt-2">
        or click to select files
      </p>
    </div>
  );
}