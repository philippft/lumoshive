export default function Modal({ isOpen, onClose, title, message, type, mode, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl max-w-sm w-full shadow-2xl animate-in fade-in zoom-in duration-200">
        <h2
          className={`text-xl font-bold mb-2 ${
            type === "success" ? "text-emerald-400" : "text-rose-400"
          }`}
        >
          {title}
        </h2>

        <p className="text-slate-300 mb-6">{message}</p>

        {mode === "delete" ? (
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-2 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition-colors"
            >
              Batal
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-lg transition-colors"
            >
              Hapus
            </button>
          </div>
        ) : (
          <button
            onClick={onClose}
            className="w-full py-2 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-lg transition-colors"
          >
            Tutup
          </button>
        )}
      </div>
    </div>
  );
}
