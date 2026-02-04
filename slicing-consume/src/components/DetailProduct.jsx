
export default function DetailProduct ({ labelTitle, labelDec }) {
    return (
      <div className="flex items-start gap-5">
        <div className="flex-shrink-0 mt-1">
          <div className="w-5 h-5 bg-[#1D2939] rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3 h-3 text-white"
            >
              <path
                fillRule="evenodd"
                d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 0 1 1.04-.208Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="w-full font-saira text-[20px] font-semibold text-darkblue leading-tight">
            {labelTitle}
          </h3>
          <span className="font-saira font-normal text-[14px] max-w-[320px] leading-relaxed">
            {labelDec}
          </span>
        </div>
      </div>
    );
}