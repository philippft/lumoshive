import NoTask from "./NoTask";
import Search from "./Search";
import TodoCard from "./TodoCard";
import { useEffect } from "react";
import { fetchAllTodos } from "../store/slices/todoSlices";
import { useDispatch, useSelector } from "react-redux";

export default function MainSection() {
  const dispatch = useDispatch();
  // console.log(dispatch);

  const { items } = useSelector((state) => state.todos);

  const totalTugas = items.length;
  const sudahSelesai = items.filter((todo) => todo.completed === true).length;
  const belumSelesai = items.filter((todo) => todo.completed === false).length;

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

  return (
    <main className="container mx-auto max-w-184 px-4">
      <Search />
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

      <div className="mt-4">
        {items.map((item) => (
          <TodoCard key={item.id} text={item.title} status={item.completed}/>
        ))}
      </div>
      {/* <NoTask /> */}
    </main>
  );
}
