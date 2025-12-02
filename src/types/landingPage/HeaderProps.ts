import type React from "react";

type setScrollDivType = React.Dispatch<React.SetStateAction<"mychat" | "resources" | "security">>;
type setCurrentThemeType = React.Dispatch<React.SetStateAction<"dark" | "light">>;

export interface HeaderProps {
    setCurrentTheme: setCurrentThemeType;
    currentTheme: "dark" | "light";
    setScrollDiv: setScrollDivType;
}
