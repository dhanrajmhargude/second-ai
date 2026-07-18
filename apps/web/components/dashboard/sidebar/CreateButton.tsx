import { Plus } from "lucide-react" 

export default function CreateButton (){
    return(
    <button className = "flex w-full items-center justify-center gap-2 rounded-full bg-[#1e1e1e] p-3.5 text-sm font-medium text-white transition-colors hover:bg-[#333333] ">
    <Plus size={18}/>Create
    </button>
    )
}