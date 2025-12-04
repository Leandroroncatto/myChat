import type { Dispatch } from "react";
import type { TabMode } from "../mainApp/tabs/TabMode";

export interface NavigationBarProps {
    activateTab: Dispatch<React.SetStateAction<TabMode>>;
}

export type ActiveTabTypes = { message: boolean; user: boolean; phone: boolean; settings: boolean };
