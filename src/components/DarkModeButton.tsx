import { MoonIcon, SunMediumIcon } from "lucide-react";
import { useEffect, useState } from "react";

function DarkModeButton() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = async () => {
    const html = document.documentElement;
    const newTheme = theme === "light" ? "dark" : "light";

    html.classList.remove(theme);
    html.classList.add(newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      const html = document.documentElement;
      html.classList.add(savedTheme);
      setTheme(savedTheme);
    }
  }, []);

  return (
    <button onClick={toggleTheme} className="transition-all duration-300">
      {theme === "light" ? <MoonIcon /> : <SunMediumIcon />}
    </button>
  );
}

export default DarkModeButton;
