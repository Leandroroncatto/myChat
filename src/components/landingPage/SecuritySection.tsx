import { Shield } from "lucide-react";
import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import type { RefSectionProps } from "../../types/landingPage/SectionsProps";

export default function SecuritySection({ ref }: RefSectionProps) {
    const { languageData } = useContext(LanguageContext);
    return (
        <>
            <section ref={ref} className="bg-white dark:bg-slate-800">
                <div className="container p-4 py-24 mx-auto">
                    <div className="flex justify-between gap-8">
                        <div className="w-full md:w-1/2">
                            <h1 className="pb-4 text-3xl font-bold text-center text-red-800 dark:text-red-500 md:text-start">
                                {languageData.landingPage?.securitySection.title}
                            </h1>
                            <ul className="ml-4 space-y-3 text-gray-700 list-disc list-inside dark:text-slate-100">
                                <li className="font-semibold text-red-700 dark:text-red-400">
                                    {languageData.landingPage?.securitySection.points.point1}
                                </li>
                                <li>{languageData.landingPage?.securitySection.points.point2}</li>
                                <li>{languageData.landingPage?.securitySection.points.point3}</li>
                                <li> {languageData.landingPage?.securitySection.points.point4}.</li>
                            </ul>
                            <p className="px-3 pt-2 text-red-500 dark:text-red-600">
                                {languageData.landingPage?.securitySection.criticalWarning}
                            </p>
                        </div>
                        <div className="items-center justify-center hidden w-1/2 p-4 md:flex bg-red-500/10 rounded-2xl">
                            <Shield size={256} className="text-red-500" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
