import { CloudFogIcon } from "lucide-react";

export default function EmptyChat() {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="flex flex-col items-center justify-center text-center">
                <CloudFogIcon size={120} className="mb-4 text-blue-500" />
                <h4 className="font-semibold text-gray-800 dark:text-slate-200">
                    Select a conversation or start a{" "}
                    <span className="font-bold text-blue-500 underline cursor-pointer">new one</span>
                </h4>
            </div>
        </div>
    );
}
