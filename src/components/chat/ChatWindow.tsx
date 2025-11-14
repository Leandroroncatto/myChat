import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import EmptyChat from "./EmptyChat";

export default function ChatWindow({ activeChat }: any) {
    return (
        <>
            {activeChat ? (
                <div className="flex flex-col flex-1 h-full">
                    <ChatHeader />
                    <ChatBody />
                </div>
            ) : (
                <div className="hidden w-full min-h-full lg:block">
                    <EmptyChat />
                </div>
            )}
        </>
    );
}
