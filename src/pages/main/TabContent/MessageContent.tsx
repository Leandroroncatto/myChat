import { useParams } from "react-router-dom";
import MessagePanel from "../../../components/chats/messageTab/MessageTab";
import ChatWindow from "../../../components/ui/ChatWindow";

export default function MessageContent() {
    const { id: activeChat } = useParams();

    return (
        <>
            {!activeChat ? (
                <div className="flex-1 lg:hidden">
                    <MessagePanel />
                </div>
            ) : (
                <div className="flex-1 lg:hidden">
                    <ChatWindow activeChat={activeChat} />
                </div>
            )}

            <div className="hidden w-full h-full lg:flex lg:flex-row">
                <MessagePanel />
                <ChatWindow activeChat={activeChat} />
            </div>
        </>
    );
}
