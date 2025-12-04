import type { SetStateAction } from "react";
import type { LangData } from "../globals/LangData";

export type InfoActiveTypes = {
    displayNameInfoActive: boolean;
    usernameInfoActive: boolean;
};

export interface InfoLabelProps {
    languageData: LangData;
    setInfoActive: React.Dispatch<SetStateAction<InfoActiveTypes>>;
    infoActive: InfoActiveTypes;
}
