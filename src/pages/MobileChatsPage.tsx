import ChatTab from "../components/chats/ChatTab";
import NavigationBar from "../components/ui/NavigationBar";

export default function MobileChatsPage() {
    return (
        <>
            <div className="w-full h-full bg-gray-100">
                <ChatTab />
                <NavigationBar />
            </div>
        </>
    );
}
