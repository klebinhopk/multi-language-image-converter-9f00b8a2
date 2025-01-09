import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function LanguageSelector() {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const currentLang = currentPath.split("/")[1] || "en";

  const switchLanguage = (lang: string) => {
    const pathParts = currentPath.split('/');
    pathParts[1] = lang;
    const newPath = pathParts.join('/');
    
    // Preserve the state when navigating
    const state = window.history.state?.usr || {};
    navigate(newPath, { state });
  };

  return (
    <div className="fixed top-4 right-4 flex gap-2 animate-fade-down">
      <Button
        variant={currentLang === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => switchLanguage("en")}
      >
        EN
      </Button>
      <Button
        variant={currentLang === "pt" ? "default" : "ghost"}
        size="sm"
        onClick={() => switchLanguage("pt")}
      >
        PT
      </Button>
    </div>
  );
}