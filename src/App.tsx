import { BrowserRouter, Route, Routes } from "react-router";
import Panel from "./pages/main/Panel";
import { useEffect } from "react";
import { getTheme, setTheme } from "./utils/toggleTheme";
import LandingPage from "./pages/landingPage/LandingPage";

function App() {
    useEffect(() => {
        const theme = getTheme();
        if (theme) {
            setTheme(theme);
        }
    }, []);

    return (
        <>
            <BrowserRouter basename="/">
                <Routes>
                    <Route path="/" element={<LandingPage />}></Route>
                    <Route path="/login" element={""}></Route>
                    <Route path="/register" element={""}></Route>

                    <Route path="/chat" element={<Panel />}></Route>
                    <Route path="/chat/:id" element={<Panel />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
