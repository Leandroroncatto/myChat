import { Link } from "react-router";
// import myChatLogo from "../../assets/myChat_lightTheme_LOGO.png";
import { Check, LanguagesIcon, MoonIcon, SunIcon } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import LanguageContext from "../../context/LanguageContext";

export default function Header({ setCurrentTheme, currentTheme }: any) {
    const [languageSelectorOpen, setLanguageSelectorOpen] = useState(false);
    const { languageData, setLanguage, changeActiveLanguage } = useContext(LanguageContext);
    const [activeLang, setActiveLang] = useState<"portugues" | "english">(
        (localStorage.getItem("lang") as "portugues" | "english") || "english"
    );

    console.log(languageData);

    useEffect(() => {
        localStorage.setItem("lang", activeLang);
        setLanguage(activeLang);
        changeActiveLanguage();
    }, [activeLang]);

    return (
        <>
            <div className="fixed top-0 w-full bg-white border-b border-gray-300 dark:text-slate-100 dark:bg-slate-900 dark:border-slate-700">
                <div className="container flex justify-between p-4 mx-auto">
                    <div className="flex items-center gap-2">
                        <h1 className="text-xl font-semibold text-gray-800 dark:text-slate-100">myChat</h1>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="items-center hidden gap-4 sm:flex">
                            <button className="text-gray-600 cursor-pointer dark:text-slate-100 dark:text hover:text-blue-500 ">
                                Recursos
                            </button>
                            <button className="text-gray-600 cursor-pointer dark:text-slate-100 hover:text-blue-500 ">
                                Segurança
                            </button>
                        </div>
                        <div className="relative">
                            <LanguagesIcon
                                onClick={() => setLanguageSelectorOpen(!languageSelectorOpen)}
                                className={`${
                                    languageSelectorOpen ? "text-blue-500" : "text-gray-600 dark:text-slate-100"
                                } cursor-pointer hover:text-blue-500`}
                                size={21}
                            />
                            {languageSelectorOpen && (
                                <div className="absolute w-48 transition duration-75 ease-in bg-white border border-gray-200 shadow-xl xl top-8 rounded-xl dark:bg-slate-800 dark:border-slate-700">
                                    <div onClick={() => setActiveLang("portugues")} className="overflow-hidden">
                                        <div className="flex items-center justify-between px-4 py-2 cursor-pointer">
                                            <p className="text-sm">Portuguese</p>
                                            {activeLang == "portugues" && <Check className="w-4 h-4 text-blue-500" />}
                                        </div>
                                    </div>
                                    <div onClick={() => setActiveLang("english")} className="overflow-hidden">
                                        <div className="flex items-center justify-between px-4 py-2 cursor-pointer rounded-xl">
                                            <p className="text-sm">English (US)</p>
                                            {activeLang == "english" && <Check className="w-4 h-4 text-blue-500" />}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {currentTheme == "dark" ? (
                            <SunIcon
                                onClick={() => setCurrentTheme("light")}
                                className="text-gray-600 cursor-pointer dark:text-slate-100 hover:text-blue-500"
                            />
                        ) : (
                            <MoonIcon
                                onClick={() => setCurrentTheme("dark")}
                                className="text-gray-600 cursor-pointer dark:text-slate-100 hover:text-blue-500"
                            />
                        )}
                        <Link
                            to={"/login"}
                            className="py-1.5 px-4 text-white bg-blue-500 hover:bg-blue-600 cursor-pointer font-semibold rounded-md shadow-md">
                            Começar
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
