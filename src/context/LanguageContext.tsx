import { createContext } from "react";
import en from "../locales/en.json";
import type { LanguageContextType } from "../types/contexts/LanguageContextType";


const LanguageContext = createContext<LanguageContextType>({
    language: "english",
    setLanguage: () => {},
    languageData: en,
});

export default LanguageContext;
