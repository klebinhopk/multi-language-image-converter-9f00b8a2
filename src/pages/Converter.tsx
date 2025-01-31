import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DropZone } from "@/components/DropZone";
import { ConversionProgress } from "@/components/ConversionProgress";
import { ConversionContent } from "@/components/ConversionContent";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Loader2, Check } from "lucide-react";
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
    progressComplete: "Conversion Complete",
  },
  pt: {
    title: "Enviar Imagens",
    subtitle: "Arraste suas imagens aqui ou clique para navegar",
    back: "Voltar",
    converting: "Convertendo",
    downloadCompleted: "Download Concluído",
    continue: "Continuar para Página de Download",
    startConversion: "Converter Imagens",
    progressComplete: "Conversão Concluída",
  },
  es: {
    title: "Subir Imágenes",
    subtitle: "Arrastra tus imágenes aquí o haz clic para navegar",
    back: "Volver",
    converting: "Convirtiendo",
    downloadCompleted: "Descarga Completada",
    continue: "Continuar a la Página de Descarga",
    startConversion: "Convertir Imágenes",
    progressComplete: "Conversión Completada",
  },
  fr: {
    title: "Télécharger des Images",
    subtitle: "Déposez vos images ici ou cliquez pour parcourir",
    back: "Retour",
    converting: "Conversion en cours",
    downloadCompleted: "Téléchargement Terminé",
    continue: "Continuer vers la Page de Téléchargement",
    startConversion: "Convertir les Images",
    progressComplete: "Conversion Terminée",
  },
  de: {
    title: "Bilder Hochladen",
    subtitle: "Ziehen Sie Ihre Bilder hierher oder klicken Sie zum Durchsuchen",
    back: "Zurück",
    converting: "Konvertierung",
    downloadCompleted: "Download Abgeschlossen",
    continue: "Weiter zur Download-Seite",
    startConversion: "Bilder Konvertieren",
    progressComplete: "Konvertierung Abgeschlossen",
  },
  it: {
    title: "Carica Immagini",
    subtitle: "Trascina le tue immagini qui o clicca per sfogliare",
    back: "Indietro",
    converting: "Conversione",
    downloadCompleted: "Download Completato",
    continue: "Continua alla Pagina di Download",
    startConversion: "Converti Immagini",
    progressComplete: "Conversione Completata",
  },
  ja: {
    title: "画像をアップロード",
    subtitle: "ここに画像をドロップするか、クリックして参照",
    back: "戻る",
    converting: "変換中",
    downloadCompleted: "ダウンロード完了",
    continue: "ダウンロードページへ進む",
    startConversion: "画像を変換",
    progressComplete: "変換完了",
  },
};

const Converter = () => {
  const { lang = "en", input, output } = useParams();
  const navigate = useNavigate();
  const [files, setFiles] = useState<FileProgress[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [conversionComplete, setConversionComplete] = useState(false);
  
  const t = translations[lang as keyof typeof translations] || translations.en;

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
    const convertedFiles = files.map(({ file }) => ({
      name: file.name,
      url: URL.createObjectURL(file)
    }));

    navigate(`/${lang}/${input}/${output}/success`, {
      state: { 
        imageCount: files.length,
        convertedFiles
      }
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
              'image/*': ['.jpg', '.jpeg', '.png', '.gif', '.webp']
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
                  disabled={isConverting || conversionComplete}
                  className="w-full"
                >
                  {isConverting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t.converting}
                    </>
                  ) : conversionComplete ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      {t.progressComplete}
                    </>
                  ) : (
                    t.startConversion
                  )}
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

          <ConversionContent input={input || ""} output={output || ""} lang={lang} />
        </div>
      </div>
    </div>
  );
};

export default Converter;
