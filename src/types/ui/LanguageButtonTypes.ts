import type { Ref, SetStateAction } from "react";
import type { LangMode } from "../globals/LangMode";

export type setLanguageSelectorOpenType = React.Dispatch<SetStateAction<boolean>>;

export interface LanguageButtonProps {
    languageIcons: {
        languageIconRef: Ref<SVGSVGElement>;
        languageSelectorRef: Ref<HTMLDivElement>;
    };
    languageStates: {
        activeLang: LangMode;
        languageSelectorOpen: boolean;
        setLanguageSelectorOpen: setLanguageSelectorOpenType;
    };
    handleLanguageChange: (lang: LangMode) => void;
}
