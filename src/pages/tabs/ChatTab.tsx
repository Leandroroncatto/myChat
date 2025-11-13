import ChatsPanel from "../../components/chats/messageTab/ChatsPanel";
import ChatWindow from "../../components/ChatWindow";

export default function ChatTab() {
    return (
        <>
            <div className="flex-1 lg:hidden">
                <ChatsPanel />
            </div>

            <div className="hidden w-full h-full lg:flex lg:flex-row">
                <ChatsPanel />
                <ChatWindow />
            </div>
        </>
    );
}
