import { Progress } from "@/components/ui/progress";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConversionProgressProps {
  fileName: string;
  progress: number;
  onRemove: () => void;
}

export function ConversionProgress({
  fileName,
  progress,
  onRemove,
}: ConversionProgressProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-card rounded-lg animate-fade-up">
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium truncate">{fileName}</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={onRemove}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
    </div>
  );
}