import { useDispatch } from "react-redux";
import Button from "./Button";
import { useDarkMode } from "../../../context/DarkModeContext";
import { addTodos } from "../../../store/slices/todoSlices";
import { useState } from "react";

export default function Search() {
  const { isDark } = useDarkMode();
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  const handleAdd = () => {
    if (todo.trim()) {
      dispatch(addTodos(todo));
      setTodo("");
    }
  };

  return (
    <section className="-mt-7 flex justify-center gap-3">
      <input
        type="text"
        placeholder="Tambah Tugas Baru"
        className={`w-full max-w-184 p-4 rounded-lg border ${isDark ? "bg-[#262626] border-[#0D0D0D] text-white" : " border-gray-300 bg-white"}`}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button
        className="flex items-center justify-center gap-2 w-27.75 bg-[#1E6F9F] text-white rounded-lg "
        text="Tambah"
        onClick={handleAdd}
        tambah="tambah"
      />
    </section>
  );
}
