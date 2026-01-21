import { ThemeContext } from "../ThemeContext";
import Header from "./Header";
import { useState, useEffect } from "react";
import ThemeButton from "./ThemeButton";

function ThemeChanger() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <ThemeButton />
    </ThemeContext.Provider>
  );
}

export default ThemeChanger;
