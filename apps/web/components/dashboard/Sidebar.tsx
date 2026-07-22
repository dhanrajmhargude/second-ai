import Brand from "./sidebar/Brand";
import CreateButton from "./sidebar/CreateButton";
import Navigation from "./sidebar/Navigation";
import RecentNotes from "./sidebar/RecentNotes";
import UserCard from "./sidebar/UserCard";

export default function Sidebar() {
  return (
    <aside className="flex w-[320px] flex-col border-r border-[#E8E3DA] p-3 bg-[#F7F4ED] mt-5">
        <div className="px-18">
        <Brand />
        </div>

      <div className="px-2 pt-6">
        <CreateButton />
      </div>

      <div className="pt-4">
        <Navigation />
      </div>

      <div >
        <RecentNotes />
      </div>
      
      <div >
        <UserCard />
      </div>
    </aside>
  );
}