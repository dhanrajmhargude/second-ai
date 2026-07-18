import { Sparkles } from "lucide-react";

export default function Brand() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600">
        <Sparkles className="h-5 w-5 text-white" />
      </div>

      <span className="text-xl font-bold">
        Second
      </span>
    </div>
  );
}