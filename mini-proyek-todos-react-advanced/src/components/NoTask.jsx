import ClipBoard from "../assets/ClipBoard.png";

export default function NoTask() {
  return (
    <article className="flex flex-col border-t border-black rounded-xl">
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center text-gray-500">
        <img src={ClipBoard} alt="" className="w-14 h-14 mb-3" />
        <h3 className="text-[16px] font-bold">
          Belum ada tugas untuk saat ini
        </h3>
        <p className="text-[16px]">
          Silahkan tambah tugas baru pada form di atas.
        </p>
      </div>
    </article>
  );
}
