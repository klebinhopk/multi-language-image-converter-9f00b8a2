import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DropZone } from "@/components/DropZone";
import { ConversionProgress } from "@/components/ConversionProgress";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { toast } from "sonner";

interface FileProgress {
  file: File;
  progress: number;
}

const translations = {
  en: {
    title: "Upload Images",
    subtitle: "Drop your images here or click to browse",
    back: "Back",
    converting: "Converting",
    downloadCompleted: "Download Completed",
    continue: "Continue to Download Page",
  },
  pt: {
    title: "Enviar Imagens",
    subtitle: "Arraste suas imagens aqui ou clique para navegar",
    back: "Voltar",
    converting: "Convertendo",
    downloadCompleted: "Download Concluído",
    continue: "Continuar para Página de Download",
  },
};

const Converter = () => {
  const { lang = "en", input, output } = useParams();
  const navigate = useNavigate();
  const [files, setFiles] = useState<FileProgress[]>([]);
  const [conversionComplete, setConversionComplete] = useState(false);
  
  const t = translations[lang as keyof typeof translations];

  const handleFilesAccepted = (acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map(file => ({
      file,
      progress: 0,
    }));
    setFiles(prev => [...prev, ...newFiles]);
    
    // Simulate conversion progress
    acceptedFiles.forEach((file, index) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setFiles(prev => 
          prev.map((f, i) => 
            f.file === file ? { ...f, progress } : f
          )
        );
        
        if (progress >= 100) {
          clearInterval(interval);
          if (index === acceptedFiles.length - 1) {
            toast.success("Conversion complete!");
            setConversionComplete(true);
          }
        }
      }, 500);
    });
  };

  const handleRemoveFile = (file: File) => {
    setFiles(prev => prev.filter(f => f.file !== file));
  };

  const handleContinue = () => {
    navigate(`/${lang}/${input}/${output}/success`, {
      state: { imageCount: files.length }
    });
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <LanguageSelector />
      
      <div className="max-w-4xl mx-auto pt-16">
        <Button
          variant="ghost"
          className="mb-8"
          onClick={() => navigate(`/${lang}`)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.back}
        </Button>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">{t.title}</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              {t.subtitle}
            </p>
          </div>

          <DropZone
            onFilesAccepted={handleFilesAccepted}
            accept={{
              'image/webp': ['.webp']
            }}
          />

          {files.length > 0 && (
            <div className="space-y-4">
              {files.map(({ file, progress }) => (
                <ConversionProgress
                  key={file.name}
                  fileName={file.name}
                  progress={progress}
                  onRemove={() => handleRemoveFile(file)}
                />
              ))}
            </div>
          )}

          {conversionComplete && (
            <div className="flex flex-col items-center gap-4 animate-fade-in">
              <Button
                size="lg"
                onClick={handleContinue}
                className="w-full max-w-md"
              >
                <Download className="mr-2 h-4 w-4" />
                {t.continue}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Converter;