import { Sparkles } from "lucide-react";

export default function Brand() {
  return (
    <div className="flex items-center gap-1">
      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#1E1E1E]">
        <Sparkles size={16} className="text-white" />
      </div>

      <span className="text-xl font-bold text-[#1E1E1E]">
        Second
      </span>
    </div>
  );
} 