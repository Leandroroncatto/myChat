import type { LangData } from "../../types/globals/LangData";

export function RightPanel({ languageData }: { languageData: LangData }) {
    return (
        <>
            <div className="hidden lg:block lg:w-1/2 bg-linear-to-br from-blue-500/30 via-blue-500/50 to-blue-500/80">
                <div className="relative z-10 flex items-center justify-center h-full p-10 text-center text-white">
                    <div>
                        <h3 className="mb-4 text-4xl font-extrabold">{languageData.auth?.loginPage.sidebarTitle}</h3>
                        <p className="text-xl font-light"> {languageData.auth?.loginPage.sidebarSubtitle}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
