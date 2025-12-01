import myChatLogo from "../../assets/myChat_lightTheme_LOGO.png";

export default function LandingPageHeader() {
    console.log(myChatLogo);
    return (
        <>
            <div className="fixed top-0 w-full bg-white border-b border-gray-300">
                <div className="container flex justify-between p-4 mx-auto">
                    <div className="flex items-center gap-2">
                        <h1 className="text-xl font-semibold text-gray-800">myChat</h1>
                    </div>
                    <div className="flex gap-4">
                        <div className="items-center hidden gap-4 sm:flex">
                            <button className="text-gray-400 cursor-pointer hover:text-gray-500 ">Recursos</button>
                            <button className="text-gray-400 cursor-pointer hover:text-gray-500 ">Segurança</button>
                        </div>
                        <button className="py-1.5 px-4 text-white bg-blue-500 hover:bg-blue-600 cursor-pointer font-semibold rounded-md">
                            Começar
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
