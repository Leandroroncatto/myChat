import { BrowserRouter, Route, Routes } from "react-router";
import TabLayout from "./pages/TabLayout";
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

                    <Route path="/" element={<TabLayout />}></Route>
                    <Route path="/chat/:id" element={""}></Route>
                    <Route path="/settings" element={""}></Route>
                    <Route path="/profile" element={""}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
