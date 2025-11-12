import { Search } from "lucide-react";
import ChatItem from "./ChatItem";

export default function ChatTab() {
    return (
        <>
            <div className="w-full h-screen p-4 py-8 sm:pl-36 lg:max-w-[600px] sm:bg-white/30">
                <div className="space-y-4">
                    <div>
                        <h1 className="text-3xl font-bold">Chats</h1>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full py-2.5 pl-10 pr-4 text-blue-500 transition-all duration-200 border shadow-xs bg-white backdrop-blur-md border-blue-500/20 rounded-xl placeholder-blue-400/60 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 focus:outline-none"
                            placeholder="Search"
                        />
                        <Search className="absolute text-blue-500 top-3 left-3" size={20} />
                    </div>
                </div>
                <div className="py-8">
                    <div><ChatItem /></div>
                </div>
            </div>
        </>
    );
}
