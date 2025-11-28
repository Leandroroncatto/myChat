import { useContext } from "react";
import LanguageContext from "../../../context/LanguageContext";
import { AlertTriangle } from "lucide-react";

export default function PhoneSection() {
    const { languageData } = useContext(LanguageContext);
    console.log(languageData);

    const warningTitle = "Funcionalidade Indisponível";
    const warningMessage =
        "Esta seção não é uma funcionalidade ativa no momento. Por favor, volte mais tarde para ver as novidades!";

    return (
        <>
            <div className="w-full h-screen py-8 sm:pl-32 lg:max-w-[600px] bg-white overflow-y-scroll border-r border-gray-300 dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
                <div className="flex flex-col gap-4 items-center justify-center w-full h-full">
                    <AlertTriangle className="text-blue-500" size={72} />
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-slate-200">{warningTitle}</h1>
                    <p className="text-sm text-center max-w-[300px] text-gray-700 dark:text-slate-300">
                        {warningMessage}
                    </p>
                </div>
            </div>
        </>
    );
}
