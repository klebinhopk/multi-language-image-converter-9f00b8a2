import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DropZone } from "@/components/DropZone";
import { ConversionProgress } from "@/components/ConversionProgress";
import { ConversionContent } from "@/components/ConversionContent";
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
    startConversion: "Convert Images",
  },
  pt: {
    title: "Enviar Imagens",
    subtitle: "Arraste suas imagens aqui ou clique para navegar",
    back: "Voltar",
    converting: "Convertendo",
    downloadCompleted: "Download Concluído",
    continue: "Continuar para Página de Download",
    startConversion: "Converter Imagens",
  },
};

const Converter = () => {
  const { lang = "en", input, output } = useParams();
  const navigate = useNavigate();
  const [files, setFiles] = useState<FileProgress[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [conversionComplete, setConversionComplete] = useState(false);
  
  const t = translations[lang as keyof typeof translations];

  const handleFilesAccepted = (acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map(file => ({
      file,
      progress: 0,
    }));
    setFiles(prev => [...prev, ...newFiles]);
  };

  const handleRemoveFile = (file: File) => {
    setFiles(prev => prev.filter(f => f.file !== file));
  };

  const startConversion = () => {
    if (files.length === 0) {
      toast.error("Please upload at least one image first");
      return;
    }
    
    setIsConverting(true);
    
    // Simulate conversion progress for each file
    files.forEach((file, index) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setFiles(prev => 
          prev.map((f, i) => 
            i === index ? { ...f, progress } : f
          )
        );
        
        if (progress >= 100) {
          clearInterval(interval);
          if (index === files.length - 1) {
            toast.success("Conversion complete!");
            setIsConverting(false);
            setConversionComplete(true);
          }
        }
      }, 500);
    });
  };

  const handleContinue = () => {
    // Prepare converted files data
    const convertedFiles = files.map(({ file }) => ({
      name: file.name,
      url: URL.createObjectURL(file)
    }));

    // Store in sessionStorage and navigate
    sessionStorage.setItem('convertedFiles', JSON.stringify(convertedFiles));
    sessionStorage.setItem('imageCount', files.length.toString());

    navigate(`/${lang}/${input}/${output}/success`, {
      state: { 
        imageCount: files.length,
        convertedFiles
      }
    });
  };

  // Persist files state in sessionStorage when it changes
  useEffect(() => {
    if (files.length > 0) {
      sessionStorage.setItem('uploadedFiles', JSON.stringify(files));
    }
  }, [files]);

  // Restore files state from sessionStorage on component mount
  useEffect(() => {
    const savedFiles = sessionStorage.getItem('uploadedFiles');
    if (savedFiles) {
      setFiles(JSON.parse(savedFiles));
    }
  }, []);

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

          <ConversionContent input={input || ""} output={output || ""} lang={lang} />

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
              
              <div className="flex flex-col gap-4 animate-fade-up">
                <Button
                  size="lg"
                  onClick={startConversion}
                  disabled={isConverting}
                  className="w-full"
                >
                  {t.startConversion}
                </Button>

                {conversionComplete && (
                  <Button
                    size="lg"
                    onClick={handleContinue}
                    className="w-full"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {t.continue}
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Converter;