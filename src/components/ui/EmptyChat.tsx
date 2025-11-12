import { CloudFogIcon } from "lucide-react";

export default function EmptyChat() {
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="flex flex-col items-center justify-center">
                    <CloudFogIcon size={120} className="text-blue-500" />
                    <h4 className="font-semibold">
                        Select a conversation or start a <span className="font-bold text-blue-500 underline cursor-pointer">new one</span>
                    </h4>
                </div>
            </div>
        </>
    );
}
