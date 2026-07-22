import { FileText } from "lucide-react";

interface RecentNoteItemProps {
  title: string;
}

export default function RecentNoteItem({
  title,
}: RecentNoteItemProps) {
  return (
    <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition hover:bg-white">
      <FileText size={16} className="text-gray-500" />
      <span className="truncate text-sm text-[#4A4A4A]">
        {title}
      </span>
    </button>
  );
}