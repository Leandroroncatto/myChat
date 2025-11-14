import SettingsTab from "../../../components/chats/settingsTab/SettingsTab";
import ChatWindow from "../../../components/ui/ChatWindow";

export default function SettingsContent() {
    return (
        <>
            <div className="flex-1 lg:hidden">
                <SettingsTab />
            </div>

            <div className="hidden w-full h-full lg:flex lg:flex-row">
                <SettingsTab />
                <ChatWindow />
            </div>
        </>
    );
}
