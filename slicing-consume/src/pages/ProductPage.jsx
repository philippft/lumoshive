import ContentImg from "../assets/content.jpg";
import ProductCard from "../components/ProductCard";
import Content from "../components/Content";

export default function ProductPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen w-full">
        <div className="flex bg-white h-160 w-full mt-10">
          <div className="font-saira w-1/3 pl-35 py-20 flex flex-col items-start gap-14">
            <h2 className="w-1/2 font-saira font-semibold text-[40px] text-darkblue leading-tight">
              New In Store Now
            </h2>
            <span className="w-3/4 font-saira font-normal text-bluedark">
              Get the latest items immediately with promo prices
            </span>
            <a
              href=""
              className="font-saira font-medium text-darkblue flex items-center"
            >
              Check All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
          <div className="flex overflow-x-auto no-scrollbar gap-10">
            <ProductCard
              img={ContentImg}
              alt="Content"
              title="Content Title"
              className="m-4 ml-10 w-86 h-132 rounded-lg"
            />
            <ProductCard
              img={ContentImg}
              alt="Content"
              title="Content Title"
              className="m-4 ml-10 w-86 h-132 rounded-lg"
            />
            <ProductCard
              img={ContentImg}
              alt="Content"
              title="Content Title"
              className="m-4 ml-10 w-86 h-132 rounded-lg"
            />
            <ProductCard
              img={ContentImg}
              alt="Content"
              title="Content Title"
              className="m-4 ml-10 w-86 h-132 rounded-lg"
            />
          </div>
        </div>
        <Content />
      </div>
    );
}