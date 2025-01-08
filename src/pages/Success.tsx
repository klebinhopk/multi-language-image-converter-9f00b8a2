import { useParams, useNavigate } from "react-router-dom";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";

const translations = {
  en: {
    title: "Conversion Complete!",
    subtitle: "Your images have been successfully converted",
    downloadAll: "Download All",
    convertMore: "Convert More Images",
  },
  pt: {
    title: "Conversão Concluída!",
    subtitle: "Suas imagens foram convertidas com sucesso",
    downloadAll: "Baixar Todas",
    convertMore: "Converter Mais Imagens",
  },
};

const Success = () => {
  const { lang = "en" } = useParams();
  const navigate = useNavigate();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <LanguageSelector />
      
      <div className="max-w-md w-full space-y-8 animate-fade-up">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">{t.title}</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        <div className="grid gap-4">
          <Button size="lg" className="w-full">
            <Download className="mr-2 h-4 w-4" />
            {t.downloadAll}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full"
            onClick={() => navigate(`/${lang}`)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.convertMore}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;