import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

interface FormatSelectorProps {
  type: "input" | "output";
  value: string;
  onChange: (value: string) => void;
  label: string;
}

export function FormatSelector({ type, value, onChange, label }: FormatSelectorProps) {
  return (
    <Card className="p-4 glass">
      <label className="block text-sm font-medium mb-2">{label}</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {type === "input" ? (
            <>
              <SelectItem value="webp">WEBP</SelectItem>
              <SelectItem value="jpg">JPG</SelectItem>
              <SelectItem value="png">PNG</SelectItem>
              <SelectItem value="gif">GIF</SelectItem>
            </>
          ) : (
            <>
              <SelectItem value="png">PNG</SelectItem>
              <SelectItem value="jpg">JPG</SelectItem>
              <SelectItem value="webp">WEBP</SelectItem>
            </>
          )}
        </SelectContent>
      </Select>
    </Card>
  );
}