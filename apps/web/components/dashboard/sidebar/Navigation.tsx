import { Archive, Search, Inbox } from "lucide-react";
import NavItem from "./NavItem";

export default function Navigation() {
  return (
    <nav className="border-b border-black/5 pb-[18px] mt-[22px] mb-5">
      <NavItem icon={Inbox} title="Home" active/>
      <NavItem icon={Search} title="Search"/>
      <NavItem icon={Archive} title="All Notes"/>
    </nav>
  );
}