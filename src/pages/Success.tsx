import { useParams, useNavigate, useLocation } from "react-router-dom";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, Image as ImageIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";

const translations = {
  en: {
    title: "Conversion Complete!",
    subtitle: "Your images have been successfully converted",
    downloadAll: "Download All",
    convertMore: "Convert More Images",
    imagesReady: "Images Ready for Download",
    imageCount: "image(s) ready",
    downloadTip: "Click the button below to download all your converted images",
  },
  pt: {
    title: "Conversão Concluída!",
    subtitle: "Suas imagens foram convertidas com sucesso",
    downloadAll: "Baixar Todas",
    convertMore: "Converter Mais Imagens",
    imagesReady: "Imagens Prontas para Download",
    imageCount: "imagem(ns) pronta(s)",
    downloadTip: "Clique no botão abaixo para baixar todas as suas imagens convertidas",
  },
};

const Success = () => {
  const { lang = "en" } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const imageCount = location.state?.imageCount || sessionStorage.getItem('imageCount') || 0;
  const t = translations[lang as keyof typeof translations];

  // Store imageCount in sessionStorage when it changes
  useEffect(() => {
    if (location.state?.imageCount) {
      sessionStorage.setItem('imageCount', location.state.imageCount.toString());
    }
  }, [location.state?.imageCount]);

  const handleBack = () => {
    navigate(`/${lang}`);
    // Clear session storage when going back to start
    sessionStorage.clear();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <LanguageSelector />
      
      <div className="max-w-2xl w-full space-y-8 animate-fade-up">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <ImageIcon className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">{t.title}</h1>
          <p className="text-lg text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        <Card className="p-6">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">{t.imagesReady}</h2>
              <div className="flex items-center justify-center gap-2 text-lg">
                <span className="text-3xl font-bold text-primary">{imageCount}</span>
                <span className="text-muted-foreground">{t.imageCount}</span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-center text-sm text-muted-foreground">
                {t.downloadTip}
              </p>
              <Button size="lg" className="w-full">
                <Download className="mr-2 h-5 w-5" />
                {t.downloadAll}
              </Button>
            </div>
          </div>
        </Card>

        <Button
          variant="outline"
          size="lg"
          className="w-full"
          onClick={handleBack}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.convertMore}
        </Button>
      </div>
    </div>
  );
};

export default Success;