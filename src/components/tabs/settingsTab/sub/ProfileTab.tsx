import { ChevronLeft, User } from "lucide-react";

export default function ProfileTab({ setActiveSection }: any) {
    return (
        <>
            <div className="p-5 transition-colors border border-gray-300 shadow-md bg-gray-50 dark:bg-gray-900 dark:border-gray-800 rounded-2xl">
                <div className="relative flex items-center justify-center pb-8">
                    <div
                        className="absolute left-0 flex items-center justify-center p-1 transition-colors rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800"
                        onClick={() => setActiveSection("options")}>
                        <ChevronLeft className="text-gray-600 dark:text-gray-300" />
                    </div>
                    <div className="flex items-center gap-2">
                        <User className="text-blue-500" size={24} />
                        <span className="font-semibold text-gray-800 dark:text-gray-100">Profile</span>
                    </div>
                </div>
                <div className="flex justify-center mt-4"></div>
            </div>
        </>
    );
}
