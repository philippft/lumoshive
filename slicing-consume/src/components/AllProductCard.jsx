import Content from "../assets/content.jpg";

export default function AllProductCard() {
  return (
    <div className="w-1/5">
      <div
        className="m-6 w-88 h-64 p-10 border rounded-xl bg-cover bg-center rounded-t-xl relative"
        style={{ backgroundImage: `url('${Content}')` }}
      >
        <div className="absolute bottom-4 right-4 text-darkblue shadow-sm hover:bg-white transition-all cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col ml-7">
        <h1>Title</h1>

        <div className="flex items-center mt-4  mb-6 gap-9">
          <span>Harga</span>
          <h1>testing</h1>
        </div>
      </div>
    </div>
  );
}
