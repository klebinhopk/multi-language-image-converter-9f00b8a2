import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    <div className="fixed top-4 right-4 w-[120px] animate-fade-down">
      <Select value={currentLang} onValueChange={switchLanguage}>
        <SelectTrigger>
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="pt">Português</SelectItem>
          <SelectItem value="es">Español</SelectItem>
          <SelectItem value="fr">Français</SelectItem>
          <SelectItem value="de">Deutsch</SelectItem>
          <SelectItem value="it">Italiano</SelectItem>
          <SelectItem value="ja">日本語</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}