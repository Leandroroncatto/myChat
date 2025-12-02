import { Link } from "react-router";
// import myChatLogo from "../../assets/myChat_lightTheme_LOGO.png"
import { Check, LanguagesIcon, MoonIcon, SunIcon } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import LanguageContext from "../../context/LanguageContext";
import type { HeaderProps } from "../../types/landingPage/HeaderProps";

export default function Header({ setCurrentTheme, currentTheme, setScrollDiv }: HeaderProps) {
    const [languageSelectorOpen, setLanguageSelectorOpen] = useState(false);
    const [activeLang, setActiveLang] = useState<"portugues" | "english">(
        (localStorage.getItem("lang") as "portugues" | "english") || "english"
    );
    const { languageData, setLanguage } = useContext(LanguageContext);
    const languageSelectorRef = useRef<HTMLDivElement | null>(null);
    const languageIconRef = useRef<SVGSVGElement | null>(null);

    function handleLanguageChange(lang: "portugues" | "english") {
        setActiveLang(lang);
        setLanguageSelectorOpen(false);
    }

    useEffect(() => {
        localStorage.setItem("lang", activeLang);
        setLanguage(activeLang);
    }, [activeLang]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                !languageIconRef.current?.contains(e.target as Node) &&
                !languageSelectorRef.current?.contains(e.target as Node)
            )
                setLanguageSelectorOpen(false);
        };

        document.addEventListener("click", handleClickOutside);

        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <>
            <div className="fixed top-0 w-full bg-white border-b border-gray-300 dark:text-slate-100 dark:bg-slate-900 dark:border-slate-700">
                <div className="container flex justify-between p-4 mx-auto">
                    <div className="flex items-center gap-2">
                        <h1
                            onClick={() => setScrollDiv("mychat")}
                            className="cursor-pointer text-xl font-semibold text-gray-800 dark:text-slate-100">
                            {" "}
                            {languageData.landingPage?.header.title}
                        </h1>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="items-center hidden gap-4 sm:flex">
                            <button
                                onClick={() => setScrollDiv("resources")}
                                className="text-gray-600 cursor-pointer dark:text-slate-100 dark:text hover:text-blue-500 ">
                                {languageData.landingPage?.header.navButtons.resourcesButton}
                            </button>
                            <button
                                onClick={() => setScrollDiv("security")}
                                className="text-gray-600 cursor-pointer dark:text-slate-100 hover:text-blue-500 ">
                                {languageData.landingPage?.header.navButtons.securityButton}
                            </button>
                        </div>
                        <div className="relative">
                            <LanguagesIcon
                                ref={languageIconRef}
                                onClick={() => setLanguageSelectorOpen(!languageSelectorOpen)}
                                className={`${
                                    languageSelectorOpen ? "text-blue-500" : "text-gray-600 dark:text-slate-100"
                                } cursor-pointer hover:text-blue-500`}
                                size={21}
                            />
                            {languageSelectorOpen && (
                                <div
                                    ref={languageSelectorRef}
                                    className="absolute w-48 transition duration-75 ease-in bg-white border border-gray-200 shadow-xl xl top-8 rounded-xl dark:bg-slate-800 dark:border-slate-700">
                                    <div onClick={() => handleLanguageChange("portugues")} className="overflow-hidden">
                                        <div className="flex items-center justify-between px-4 py-2 cursor-pointer dark:hover:bg-slate-900 rounded-t-xl">
                                            <p className="text-sm">Portugues (BR)</p>
                                            {activeLang == "portugues" && <Check className="w-4 h-4 text-blue-500" />}
                                        </div>
                                    </div>
                                    <div onClick={() => handleLanguageChange("english")} className="overflow-hidden">
                                        <div className="flex items-center justify-between px-4 py-2 cursor-pointer dark:hover:bg-slate-900 rounded-b-xl">
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
