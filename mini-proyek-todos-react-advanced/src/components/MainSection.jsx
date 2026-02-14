import NoTask from "./NoTask";
import Search from "./Search";

export default function MainSection() {
  return (
    <main className="container mx-auto max-w-184 px-4">
      <Search />
      <div className="flex justify-between items-center mt-12 mb-6">
        <div className="flex items-center gap-2">
          <span className="text-blue-400 font-bold text-sm">Belum Selesai</span>
          <span className="bg-gray-700 text-gray-200 px-2 py-0.5 rounded-full text-xs font-bold">
            {/* {totalTodos} */}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-purple-400 font-bold text-sm">Selesai</span>
          <span className="bg-gray-700 text-gray-200 px-2 py-0.5 rounded-full text-xs font-bold">
            {/* {completedTodos} dari {totalTodos} */}
          </span>
        </div>
      </div>
      <NoTask />
    </main>
  );
}
