import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

interface FormatSelectorProps {
  type: "input" | "output";
  value: string;
  onChange: (value: string) => void;
  label: string;
  disabledValue?: string;
}

export function FormatSelector({ type, value, onChange, label, disabledValue }: FormatSelectorProps) {
  console.log(`FormatSelector ${type} - Current value: ${value}, Disabled value: ${disabledValue}`);
  
  return (
    <Card className="p-4 glass">
      <label className="block text-sm font-medium mb-2">{label}</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="bg-background">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-background">
          {type === "input" ? (
            <>
              <SelectItem value="webp" disabled={disabledValue === "webp"}>WEBP</SelectItem>
              <SelectItem value="jpg" disabled={disabledValue === "jpg"}>JPG</SelectItem>
              <SelectItem value="png" disabled={disabledValue === "png"}>PNG</SelectItem>
              <SelectItem value="gif" disabled={disabledValue === "gif"}>GIF</SelectItem>
            </>
          ) : (
            <>
              <SelectItem value="png" disabled={disabledValue === "png"}>PNG</SelectItem>
              <SelectItem value="jpg" disabled={disabledValue === "jpg"}>JPG</SelectItem>
              <SelectItem value="webp" disabled={disabledValue === "webp"}>WEBP</SelectItem>
            </>
          )}
        </SelectContent>
      </Select>
    </Card>
  );
}