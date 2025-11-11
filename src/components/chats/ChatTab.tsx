import { Search } from "lucide-react";
import ChatItem from "./ChatItem";

export default function ChatTab() {
    return (
        <>
            <div className="p-4 py-8">
                <div className="space-y-4">
                    <div>
                        <h1 className="text-3xl font-bold">Chats</h1>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            className="bg-blue-300/10 w-full rounded-xl border border-blue-500/20 focus:outline-0 pl-10 py-1.5 text-blue-500"
                            placeholder="Search"
                        />
                        <Search className="absolute top-2.5 left-3 text-blue-500" size={20} />
                    </div>
                </div>
                <div className="py-8">
                    
                    <div><ChatItem /></div>
                </div>
            </div>
        </>
    );
}
