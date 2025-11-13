import { useState } from "react";
import NavigationBar from "../components/ui/NavigationBar";
import ChatTab from "./tabs/ChatTab";
import ChatWindow from "../components/ChatWindow";

export default function TabLayout() {
    const [activeTab, setActiveTab] = useState("message");
    const activeChat = "chatID";

    const renderTabs = () => {
        switch (activeTab) {
            case "message":
                return <ChatTab />;
            case "user":
                return "";
            case "phone":
                return "";
            case "settings":
                return "";
        }
    };

    return (
        <div className="relative flex flex-col w-full h-screen transition-colors duration-300 border-r border-gray-200 shadow-sm bg-gray-50 dark:bg-slate-900 dark:border-slate-800">
            <NavigationBar activateTab={setActiveTab} />

            {renderTabs()}

            {activeChat && <ChatWindow />}
        </div>
    );
}
