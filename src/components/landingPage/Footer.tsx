import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";

export default function Footer() {
    const { languageData } = useContext(LanguageContext);

    return (
        <>
            <footer className="bg-slate-900 dark:bg-slate-950">
                <div className="container p-4 py-12 mx-auto">
                    <div className="flex items-center justify-between">
                        <p className="text-xl font-extrabold text-gray-200">myChat</p>
                        <p className="text-xs font-semibold text-center text-gray-400 sm:text-sm">
                            {languageData.landingPage?.footer.copyright}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
