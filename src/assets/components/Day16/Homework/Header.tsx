import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Header() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  return (
    <h1>
      Current Theme: {themeContext.theme.toUpperCase()}
    </h1>
  );
}

export default Header;
