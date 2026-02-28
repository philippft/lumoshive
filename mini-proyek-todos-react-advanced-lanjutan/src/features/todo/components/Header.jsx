import HeaderLogo from '../../../assets/LogoTodo.png'
import { useDarkMode } from '../../../context/DarkModeContext';

export default function Header () {
    const { isDark } = useDarkMode();

    return (
      <header
        className={`w-full h-50 flex items-center justify-center ${isDark ? "bg-[#0D0D0D]" : " bg-gray-200 "}`}
      >
        <img src={HeaderLogo} alt="" />

      </header>
    );
}