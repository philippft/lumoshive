import Navbar from "../components/Navbar";
// import HeaderImg from "../assets/header.jpg";
import Button from "../components/Button";
import Stats from "../components/Stats";
import Content from "../components/Content";


export default function HeaderPage({ data }) {

  if (!data.stats && !data.header) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }
    return (
      <>
        <div
          className="relative min-h-screen w-full bg-cover bg-center flex flex-col bg-fixed"
          style={{ backgroundImage: `url(${data?.header?.banner})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute inset-x-0 bottom-0 h-8 bg-linear-to-t from-white to-transparent z-0"></div>

          <Navbar />

          <div className="relative z-10 flex flex-col items-center justify-center grow text-center text-white pt-32">
            <h1 className="mt-8 font-saira font-semibold text-[64px]">
              {data.header.title}
            </h1>
            <span className="mt-2 font-saira font-normal text-[20px] tracking-[0.01em]">
              {data.header.description}
            </span>
            <Button
              text="Shop Now"
              className="mt-10 px-30 py-8 bg-white/20 backdrop-blur-md border border-white/40 text-white font-saira font-semibold text-[20px] rounded-lg hover:bg-white/30 transition-all duration-300"
            />
            <Stats stats={data.stats} />
          </div>
        </div>
        <Content content="content"/>
      </>
    );
}