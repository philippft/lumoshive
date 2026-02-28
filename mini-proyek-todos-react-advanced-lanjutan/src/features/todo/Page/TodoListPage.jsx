import Header from "../components/Header";
import MainSection from "../components/MainSection";
import { lazy, Suspense } from "react";
import { useTodo } from "../hooks/useTodo";
import { useDarkMode } from "../../../context/DarkModeContext";

export default function TodoListPage() {
  const { isDark } = useDarkMode();
  const { items, status, error, addTodo, updateTodo, deleteTodo } = useTodo();
  
  const MainSection = lazy(() => import("../components/MainSection"));

  return (
    <div className={`${isDark ? "bg-[#1A1A1A]" : ""}`}>
      <Header />

      <Suspense
        fallback={
          <div className="flex justify-center items-center h-40 text-blue-400 font-bold italic animate-pulse">
            Memuat Komponen...
          </div>
        }
      >
        {status === "loading" ? (
          <div className="flex justify-center items-center h-40 text-blue-400 font-bold">
            Memuat Data...
          </div>
        ) : (
          <MainSection
            items={items}
            addTodo={addTodo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        )}
      </Suspense>

      {error && <p className="text-red-500 text-center p-4">{error}</p>}
    </div>
  );
}
