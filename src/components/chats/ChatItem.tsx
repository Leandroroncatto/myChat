import testProfilePicture from "../../assets/testProfilePicture.jpg";

export default function ChatItem() {
    return (
        <>
            <div className="relative flex flex-row items-center w-full gap-3 p-4 bg-white rounded-2xl">
                <img
                    src={testProfilePicture}
                    alt="profile picture"
                    className="w-12 h-12 border border-blue-500 rounded-full"
                />
                <div className="flex flex-col w-[80%]">
                    <div>
                        <div className="flex flex-row items-center justify-between w-full">
                            <h3 className="font-semibold">nome legal</h3>
                            <div className="text-xs">00:00</div>
                        </div>
                        <p className="text-sm text-gray-800">you: ultima mensagem</p>
                    </div>
                </div>
            </div>
        </>
    );
}
