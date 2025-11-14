import MessagePanel from "../../../components/chats/messageTab/MessageTab";
import ChatWindow from "../../../components/ui/ChatWindow";

export default function MessageContent() {
    return (
        <>
            <div className="flex-1 lg:hidden">
                <MessagePanel />
            </div>

            <div className="hidden w-full h-full lg:flex lg:flex-row">
                <MessagePanel />
                <ChatWindow />
            </div>
        </>
    );
}
