import Header from "../components/Header";
import MainSection from "../components/MainSection";
import { useDarkMode } from "../context/DarkModeContext";


export default function TodoListPage() {
    const { isDark, toggleTheme } = useDarkMode();

  return (
    <div className={`${isDark ? "bg-[#1A1A1A]" : ""}`}>
      <Header />
      <MainSection />
    </div>
  );
}
