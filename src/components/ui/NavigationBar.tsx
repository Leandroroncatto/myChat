import { MessageCircleIcon, PhoneIcon, Settings, UsersIcon } from "lucide-react";
import { useState } from "react";

type tabTypes = {
    message: boolean;
    user: boolean;
    phone: boolean;
    settings: boolean;
};

export default function NavigationBar() {
    const [activeTab, setActiveTab] = useState<tabTypes>({
        message: true,
        user: false,
        phone: false,
        settings: false,
    });
    const activeTabStyles = "transition ease duration-100 bg-blue-600 text-white p-1.5 rounded-md";

    function handleTabActivation(tab: string) {
        setActiveTab({
            message: tab == "message",
            user: tab == "user",
            phone: tab == "phone",
            settings: tab == "settings",
        });
    }

    return (
        <>
            <div className="fixed bottom-0 w-full p-4 bg-gray-200 border-t border-gray-300 ">
                <div className="flex items-center justify-around gap-2">
                    <div className={`${activeTab.message ? activeTabStyles : ""}`}>
                        <MessageCircleIcon onClick={() => handleTabActivation("message")} />
                    </div>
                    <div className={`${activeTab.user ? activeTabStyles : ""}`}>
                        <UsersIcon onClick={() => handleTabActivation("user")} />
                    </div>
                    <div className={`${activeTab.phone ? activeTabStyles : ""}`}>
                        <PhoneIcon onClick={() => handleTabActivation("phone")} />
                    </div>

                    <div className="flex items-center justify-center pl-4 border-l-2 border-gray-300">
                        <div className={`${activeTab.settings ? activeTabStyles : ""}`}>
                            <Settings onClick={() => handleTabActivation("settings")} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
