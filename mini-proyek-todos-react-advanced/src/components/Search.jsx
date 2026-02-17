import Button from '../components/Button'
import { useDarkMode } from '../context/DarkModeContext';


export default function Search () {
    const { isDark, toggleTheme } = useDarkMode();

    return (
      <section className="-mt-7 flex justify-center gap-3">
        <input
          type="text"
          placeholder="Tambah Tugas Baru"
          className={`w-full max-w-184 p-4 rounded-lg border ${isDark ? "bg-[#262626] border-[#0D0D0D] text-white" : " border-gray-300 bg-white"}`}
        />
        <Button
          className="flex items-center justify-center gap-2 w-27.75 bg-[#1E6F9F] text-white rounded-lg "
          text="Tambah"
          tambah="tambah"
        />
      </section>
    );
}