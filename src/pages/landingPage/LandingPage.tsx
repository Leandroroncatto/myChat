import { useEffect, useRef, useState } from "react";
import FeaturesSection from "../../components/landingPage/FeaturesSection";
import Footer from "../../components/landingPage/Footer";
import Header from "../../components/landingPage/Header";
import HeroSection from "../../components/landingPage/HeroSection";
import SecuritySection from "../../components/landingPage/SecuritySection";
import { getTheme, setTheme } from "../../utils/toggleTheme";
import type { ThemeMode } from "../../types/globals/ThemeMode";
import type { ScrollToSectionType } from "../../types/landingPage/ScrollToSectionType";

export default function LandingPage() {
    const [currentTheme, setCurrentTheme] = useState<ThemeMode>(getTheme());
    const [scrollDiv, setScrollDiv] = useState<ScrollToSectionType>("mychat");

    const featuredRef = useRef<HTMLElement>(null);
    const securityRef = useRef<HTMLElement>(null);

    function scrollToPosition(scrollDiv: string) {
        switch (scrollDiv) {
            case "mychat":
                scrollTo({ top: 0, behavior: "smooth" });
                break;
            case "resources":
                scrollTo({ top: featuredRef.current?.offsetTop, behavior: "smooth" });
                break;
            case "security":
                scrollTo({ top: securityRef.current?.offsetTop, behavior: "smooth" });
                break;
        }
    }

    useEffect(() => {
        const initialTheme = getTheme() || "light";
        setCurrentTheme(initialTheme);
    }, []);

    useEffect(() => {
        if (currentTheme) setTheme(currentTheme);
    }, [currentTheme]);

    useEffect(() => {
        scrollToPosition(scrollDiv);
    }, [scrollDiv]);

    return (
        <>
            <Header setCurrentTheme={setCurrentTheme} currentTheme={currentTheme} setScrollDiv={setScrollDiv} />
            <HeroSection currentTheme={currentTheme} />
            <FeaturesSection ref={featuredRef} />
            <SecuritySection ref={securityRef} />
            <Footer />
        </>
    );
}
