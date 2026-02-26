import Header from "../components/Header";
import MainSection from "../components/MainSection";
import React, { lazy, Suspense } from "react";
import { useDarkMode } from "../context/DarkModeContext";


export default function TodoListPage() {
    const { isDark } = useDarkMode();

    const MainSection = lazy(() => import("../components/MainSection"));

  return (
    <div className={`${isDark ? "bg-[#1A1A1A]" : ""}`}>
      <Header />

      <Suspense
        fallback={
          <div className="flex justify-center items-center h-40 text-blue-400 font-bold">
            Memuat Daftar Tugas...
          </div>
        }
      >
        <MainSection />
      </Suspense>
    </div>
  );
}
