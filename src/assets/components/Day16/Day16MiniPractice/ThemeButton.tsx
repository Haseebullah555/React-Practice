import { useContext, useEffect } from "react";
import { ThemeContext } from "../ThemeContext";

function ThemeButton() {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) return;

    const {theme, setTheme} = themeContext;

    useEffect(() => {
        document.body.style.backgroundColor =
            theme === "dark" ? "#000" : "#fff";
        document.body.style.color =
            theme === "dark" ? "#fff" : "#000";
    }, [theme]);
    return (
        <>
            <button
                onClick={() =>
                    setTheme(theme === "dark" ? "light" : "dark")
                }
            >
                {theme === "dark" ? "Light" : "Dark"}
            </button>
        </>
    )
}
export default ThemeButton;