import { createContext } from "react";
import en from "../locales/en.json";

type languageContextTypes = {
    language: "portugues" | "english";
    setLanguage: React.Dispatch<React.SetStateAction<"portugues" | "english">>;
    languageData: typeof en;
    changeActiveLanguage: () => void;
};

const LanguageContext = createContext<languageContextTypes>({
    language: "english",
    setLanguage: () => {},
    languageData: en,
    changeActiveLanguage: () => {},
});

export default LanguageContext;
