import { Shield, Users, Zap } from "lucide-react";
import FeatureItem from "./FeatureItem";
import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import type { RefSectionProps } from "../../types/landingPage/SectionsProps";

export default function FeaturesSection({ ref }: RefSectionProps) {
    const { languageData } = useContext(LanguageContext);

    return (
        <>
            <section ref={ref} className="bg-slate-50 dark:bg-slate-900">
                <div className="container w-full px-4 mx-auto py-18">
                    <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-slate-100">
                        {languageData.landingPage?.featuresSection.title}
                    </h1>
                    <div className="flex flex-col w-full grid-cols-3 gap-8 pt-12 lg:grid">
                        <FeatureItem
                            icon={<Zap className="text-blue-500" />}
                            title={languageData.landingPage?.featuresSection.feature1.title}
                            text={languageData.landingPage?.featuresSection.feature1.text}
                        />
                        <FeatureItem
                            icon={<Shield className="text-blue-500" />}
                            title={languageData.landingPage?.featuresSection.feature2.title}
                            text={languageData.landingPage?.featuresSection.feature2.text}
                        />
                        <FeatureItem
                            icon={<Users className="text-blue-500" />}
                            title={languageData.landingPage?.featuresSection.feature3.title}
                            text={languageData.landingPage?.featuresSection.feature3.text}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
