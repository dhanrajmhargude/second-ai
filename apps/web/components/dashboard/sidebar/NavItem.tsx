import { LucideIcon } from "lucide-react";

interface NavItemProps{
    icon : LucideIcon,
    title : string,
    active?:boolean,
    onClick?:() => void;
} 
export default function NavItem({
    icon : Icon,
    title ,
    active = false , 
    onClick,
}: NavItemProps){
    return(
        <button onClick={onClick} className={`flex w-full items-center gap-3 rounded-xl px-[11px] py-[10px] text-left text-sm transition-all ${active? "bg-white text-[#1e1e1e] shadow-[0_2px_7px_rgba(36,29,18,0.055)]" : "text-[#6e6e73] hover:bg-black/5 hover:text-[#1e1e1e]"}`} >  
        <Icon size={18} />
        <span>{title}</span>
        </button>
    )
}