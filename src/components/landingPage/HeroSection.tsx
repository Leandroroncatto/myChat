import { Link } from "react-router";
import myChatLightThemeInterfaceTest from "../../assets/myChatLightInterface.png";
import myChatDarkThemeInterfaceTest from "../../assets/myChatDarkInterface.png";
import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";

export default function HeroSection({ currentTheme }: any) {
    const { languageData } = useContext(LanguageContext);
    return (
        <>
            <section className="bg-white dark:bg-slate-800 ">
                <div className="container p-4 pb-24 mx-auto pt-42">
                    <div className="flex flex-col items-center justify-center gap-8 pb-12">
                        <h1 className="text-4xl font-extrabold leading-tight text-center text-gray-800 md:text-6xl dark:text-slate-100">
                            {languageData.landingPage?.heroSection.headline}
                        </h1>
                        <p className="text-xl text-gray-500 max-w-[700px] text-center dark:text-slate-200">
                            {languageData.landingPage?.heroSection.subtitle}
                        </p>
                        <Link
                            to={"/login"}
                            className="px-6 py-4 font-bold text-white transition duration-100 ease-in bg-blue-500 rounded-md cursor-pointer hover:scale-102 hover:shadow-lg hover:bg-blue-600">
                            {languageData.landingPage?.heroSection.buttonText}
                        </Link>
                    </div>
                    <div className="flex items-center justify-between gap-4 p-2">
                        <div className="p-4 mx-auto duration-150 ease-in border border-gray-200 shadow-2xl dark:border-slate-800 transition-transform-shadow dark:text-slate-100 dark:bg-slate-900 md:w-2/3 lg:w-1/2 bg-gray-50 rounded-2xl hover:scale-102 hover:shadow-blue-500/20">
                            <img
                                src={
                                    currentTheme == "dark"
                                        ? myChatDarkThemeInterfaceTest
                                        : myChatLightThemeInterfaceTest
                                }
                                alt="myChat interface"
                                className="object-cover w-full "
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
