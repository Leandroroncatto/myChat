import { Link } from "react-router";
import myChatInterfaceTest from "../../assets/myChatInterface.png";

export default function HeroSection() {
    return (
        <>
            <section className="bg-white">
                <div className="container p-4 pb-24 mx-auto pt-42">
                    <div className="flex flex-col items-center justify-center gap-8 pb-12">
                        <h1 className="text-4xl font-extrabold leading-tight text-center text-gray-800 md:text-6xl">
                            Conecte-se com quem se importa
                        </h1>
                        <p className="text-xl text-gray-500 max-w-[700px] text-center">
                            Uma plataforma de mensagens moderna para manter suas conversas organizadas.
                        </p>
                        <Link to={"/login"} className="px-6 py-4 font-bold text-white transition duration-100 ease-in bg-blue-500 rounded-md cursor-pointer hover:scale-102 hover:shadow-lg hover:bg-blue-600">
                            Começar Agora
                        </Link>
                    </div>
                    <div className="flex items-center justify-between gap-4 p-2">
                        <div className="p-4 mx-auto transition duration-100 ease-in border border-gray-200 shadow-2xl md:w-2/3 lg:w-1/2 bg-gray-50 rounded-2xl hover:scale-102 hover:shadow-blue-500/20">
                            <img src={myChatInterfaceTest} alt="" className="object-cover w-full" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
