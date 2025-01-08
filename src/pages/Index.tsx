import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormatSelector } from "@/components/FormatSelector";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const translations = {
  en: {
    title: "Image Converter",
    subtitle: "Convert your images quickly and easily",
    inputFormat: "Input Format",
    outputFormat: "Output Format",
    convert: "Convert Images",
  },
  pt: {
    title: "Conversor de Imagens",
    subtitle: "Converta suas imagens de forma rápida e fácil",
    inputFormat: "Formato de Entrada",
    outputFormat: "Formato de Saída",
    convert: "Converter Imagens",
  },
};

const Index = () => {
  const navigate = useNavigate();
  const [inputFormat, setInputFormat] = useState("webp");
  const [outputFormat, setOutputFormat] = useState("png");
  
  const currentLang = window.location.pathname.split("/")[1] || "en";
  const t = translations[currentLang as keyof typeof translations];

  const handleConvert = () => {
    navigate(`/${currentLang}/${inputFormat}/${outputFormat}`);
  };

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

        <div className="grid gap-6">
          <FormatSelector
            type="input"
            value={inputFormat}
            onChange={setInputFormat}
            label={t.inputFormat}
          />
          <FormatSelector
            type="output"
            value={outputFormat}
            onChange={setOutputFormat}
            label={t.outputFormat}
          />
          <Button
            size="lg"
            className="w-full"
            onClick={handleConvert}
          >
            {t.convert}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;