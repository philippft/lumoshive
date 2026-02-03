import Navbar from "../components/Navbar";
import HeaderImg from "../assets/header.jpg";


export default function HeaderPage() {
    return (
      <div
        className="relative min-h-screen w-full bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `url(${HeaderImg})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <Navbar />

        <div className="relative z-10 flex flex-col items-center justify-center grow text-center text-white pt-32">
          <h1 className="mt-8 font-saira font-semibold text-[64px]">
            Creative Home Simpify your <br /> Furniture
          </h1>
          <span className="mt-2 font-saira font-normal text-[20px] tracking-[0.01em]">
            Do i have consent to record this meeting gain locaion, root-
            <br />
            and-branch, review, nor game plan who’s the goto
          </span>
          <button className="mt-10 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
            Explore More
          </button>
        </div>
      </div>
    );
}