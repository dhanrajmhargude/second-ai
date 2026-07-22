import RecentNoteItem from "./RecentNoteItem";

const recentNotes = [
  "Research Library",
  "Brainly Project",
  "Product Thoughts",
  "AI Agent Notes",
];

export default function RecentNotes() {
  return (
    <div className="mt-8">
      <h3 className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
        Recent
      </h3>

      <div className="space-y-1">
        {recentNotes.map((note) => (
          <RecentNoteItem
            key={note}
            title={note}
          />
        ))}
      </div>
    </div>
  );
}