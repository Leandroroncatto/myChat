import testProfilePicture from "../../../assets/testProfilePicture.jpg";

export default function ChatItem() {
    return (
        <>
            <li className="relative flex items-center w-full gap-3 p-4 transition-all duration-200 shadow-xs cursor-pointer bg-white/80 rounded-2xl hover:bg-blue-400/20">
                <img
                    src={testProfilePicture}
                    alt="profile picture"
                    className="object-cover w-12 h-12 border rounded-full border-blue-400/30"
                />
                <div className="flex flex-col flex-1 min-w-0 gap-1">
                    <div className="flex flex-row items-center justify-between w-full">
                        <h3 className="font-semibold text-gray-800 truncate">pessoa legal</h3>
                        <div className="text-xs text-gray-400">00:00</div>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500 truncate">testetesteteste</p>
                        <div className="flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-blue-500 rounded-full">{2}</div>
                    </div>
                </div>
            </li>
        </>
    );
}
