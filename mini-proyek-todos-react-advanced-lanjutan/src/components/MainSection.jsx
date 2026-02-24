import NoTask from "./NoTask";
import Search from "./Search";
import TodoCard from "./TodoCard";
import { useEffect } from "react";
import { fetchAllTodos } from "../store/slices/todoSlices";
import { useDispatch, useSelector } from "react-redux";
import { Sun, Moon } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";

export default function MainSection()  {
  const dispatch = useDispatch();
  const { isDark, toggleTheme } = useDarkMode();
  
  const { items } = useSelector((state) => state.todos);
  // console.log(items[0].title);

  const totalTugas = items.length;
  const sudahSelesai = items.filter((todo) => todo.completed === true).length;
  const belumSelesai = items.filter((todo) => todo.completed === false).length;

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

  return (
    <main className="container mx-auto max-w-184 px-4 min-h-screen">
      <Search />

      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        aria-label="Toggle dark mode"
      >
        {isDark ? <Moon size={22} className="text-gray-300" /> : <Sun size={22} />}
      </button>

      <div className="flex justify-between items-center mt-12 mb-6">
        <div className="flex items-center gap-2">
          <span className="text-blue-400 font-bold text-sm">Belum Selesai</span>
          <span className="bg-blue-400 text-gray-200 px-2 rounded-full text-xs font-bold">
            {belumSelesai}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-purple-400 font-bold text-sm">Selesai</span>
          <span className="bg-purple-400 text-gray-200 px-2 py-0.5 rounded-full text-xs font-bold">
            {sudahSelesai} dari {totalTugas}
          </span>
        </div>
      </div>

      {items.length == 0 ? (
        <NoTask isDark={isDark} />
      ) : (
        <div className="mt-4">
          {items.map((item) => (
            <TodoCard key={item.id} id={item.id} text={item.title} status={item.completed} />
          ))}
        </div>
      )}
    </main>
  );
}
