export default function Modal({ status, message, onClose }) {
  const isSuccess = status === "success";
  const themeGreen = "bg-[#246363]";
  const themeHover = "hover:bg-[#1a4a4a]";

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div className="bg-white w-full max-w-sm rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-in fade-in zoom-in duration-300">
        <div
          className={`py-10 flex justify-center ${isSuccess ? "bg-slate-50" : "bg-red-50"}`}
        >
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center border-4 shadow-inner ${
              isSuccess
                ? "border-[#246363] bg-white"
                : "border-red-500 bg-white"
            }`}
          >
            {isSuccess ? (
              <svg
                className="w-10 h-10 text-[#246363]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="w-10 h-10 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
        </div>

        <div className="p-8 text-center bg-white">
          <h3
            className={`text-2xl font-bold font-saira mb-3 tracking-tight ${isSuccess ? "text-[#23262F]" : "text-red-600"}`}
          >
            {isSuccess ? "Langganan Berhasil!" : "Langganan Gagal"}
          </h3>
          <p className="text-gray-500 font-saira leading-relaxed px-2">
            {message}
          </p>

          <button
            onClick={onClose}
            className={`mt-10 w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg active:scale-95 font-saira tracking-wide ${
              isSuccess
                ? `${themeGreen} ${themeHover} shadow-[#246363]/20`
                : "bg-red-500 hover:bg-red-600 shadow-red-200"
            }`}
          >
            {isSuccess ? "Kembali" : "Coba Lagi"}
          </button>
        </div>
      </div>
    </div>
  );
}
