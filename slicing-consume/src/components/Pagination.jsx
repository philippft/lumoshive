
export default function Pagination({ current, total, onChange }) {
  return (
    <div className="flex items-center justify-center gap-4 mt-12">
      {/* Tombol Back */}
      <button
        disabled={current === 1}
        onClick={() => onChange(current - 1)}
        className="p-3 rounded-full border shadow-sm disabled:opacity-30"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </button>

      {/* Indikator Titik (Dots) */}
      <div className="flex gap-2">
        {[...Array(total)].map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              current === index + 1 ? "bg-darkblue w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Tombol Next */}
      <button
        disabled={current === total}
        onClick={() => onChange(current + 1)}
        className="p-3 rounded-full border shadow-sm disabled:opacity-30"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
}
