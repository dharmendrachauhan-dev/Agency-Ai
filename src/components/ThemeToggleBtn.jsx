import assets from "../assets/assets";
import { useEffect } from "react";

function ThemeToggleBtn({ theme, setTheme }) {
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(theme || (prefersDarkMode ? "dark" : "light"));
  }, []);

  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // console.log(theme)

  return (
    <>
      <button>
        {theme === "dark" ? (
          <img
            src={assets.sun_icon}
            onClick={() => setTheme("light")}
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"
            alt=""
          />
        ) : (
          <img
            src={assets.moon_icon}
            onClick={() => setTheme("dark")}
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"
            alt=""
          />
        )}
      </button>
    </>
  );
}

export default ThemeToggleBtn;
