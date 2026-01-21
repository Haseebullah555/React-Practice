import { useEffect, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import ThemeButton from "./ThemeButton";

function ThemeChanger() {
    const [theme, setTheme] = useState(()=>{
        return localStorage.getItem("theme") || "dark";
    });
    useEffect(()=>{
        localStorage.setItem("theme", theme)
    },[theme]);
    return (
        <>
            <ThemeContext.Provider value={{ theme ,setTheme }}>
                <ThemeButton/>
            </ThemeContext.Provider>
        </>
    )
}
export default ThemeChanger;