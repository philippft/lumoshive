export default function Modal({ isOpen, onClose, title, message, type }) {
  if (!isOpen) return null; // Jika tidak open, jangan gambar apa-apa

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl max-w-sm w-full shadow-2xl animate-in fade-in zoom-in duration-200">
        <h2
          className={`text-xl font-bold mb-2 ${type === "success" ? "text-emerald-400" : "text-rose-400"}`}
        >
          {title}
        </h2>
        <p className="text-slate-300 mb-6">{message}</p>

        <button
          onClick={onClose}
          className="w-full py-2 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-lg transition-colors"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}
