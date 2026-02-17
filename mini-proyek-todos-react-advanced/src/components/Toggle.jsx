import { useDarkMode } from "../context/DarkModeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 transition-all"
    >
      {isDark ? (
          <Moon className="text-blue-600" size={20} />
        ) : (
        <Sun className="text-yellow-400" size={20} />
      )}
    </button>
  );
}
