import { useParams } from "react-router";
import SettingsTab from "../../../components/chats/settingsTab/SettingsTab";
import ChatWindow from "../../../components/ui/ChatWindow";
import { useEffect, useState } from "react";

export default function SettingsContent() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const { id: activeChat } = useParams();

    useEffect(() => {
        function onResize() {
            setIsMobile(window.innerWidth < 1024);
        }
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return (
        <>
            {!activeChat ? (
                <div className="flex-1 lg:hidden">
                    <SettingsTab />
                </div>
            ) : isMobile ? (
                <div className="flex-1 lg:hidden">
                    <SettingsTab />
                </div>
            ) : (
                <div className="flex-1 lg:hidden">
                    <ChatWindow activeChat={activeChat} />
                </div>
            )}

            <div className="hidden w-full h-full lg:flex lg:flex-row">
                <SettingsTab />
                <ChatWindow activeChat={activeChat} />
            </div>
        </>
    );
}
