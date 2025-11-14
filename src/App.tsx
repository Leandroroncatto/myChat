import { BrowserRouter, Route, Routes } from "react-router";
import Panel from "./pages/main/Panel";
import { useEffect } from "react";
import { getTheme, setTheme } from "./utils/toggleTheme";

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
                    <Route path="/auth/register" element={""}></Route>
                    <Route path="/auth/login" element={""}></Route>

                    <Route path="/chat" element={<Panel />}></Route>
                    <Route path="/chat/:id" element={<Panel />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
