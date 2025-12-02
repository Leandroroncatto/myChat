import type { Ref } from "react";
import type { ThemeMode } from "../globals/ThemeMode";

type refType = Ref<HTMLElement>;

export interface RefSectionProps {
    ref: refType;
}

export interface HeroSectionProps {
    currentTheme: ThemeMode;
}
