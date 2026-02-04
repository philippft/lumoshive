import ContentImg from "../assets/content.jpg"
import DetailProduct from "./DetailProduct";

export default function Content({ content }) {
    if (content) {
        return (
            <div className="flex w-full items-center py-20 text-4xl px-8 gap-10">
                <div className="w-1/2 h-1/4 justify-center items-center mt-20 ml-30">
                    <img
                    src={ContentImg}
                    alt=""
                    className="w-3/4 h-112 object-cover object-center scale-105 rounded-lg overflow-hidden shrink-0"
                    />
                </div>
                <div className="flex flex-col text-bluedark justify-center h-full w-1/2 mt-20 gap-5">
                    <h2 className="w-4/5 font-saira font-semibold text-[40px] leading-snug">
                    We Create your home more aestetic
                    </h2>
                        <span className="font-saira font-normal text-[20px] leading-relaxed w-4/5">
                        Furnitre power is a software as services for multiperpose business
                        management system,
                        </span>
                        <DetailProduct
                        labelTitle="Valuation Services"
                        labelDec="Sometimes features require a short description.  This can be detailed description"
                        />
                        <DetailProduct
                        labelTitle="Development of Furniture Modelss"
                        labelDec="Sometimes features require a short description. This can be detailed description"
                        />
                    </div>
            </div>
        );
    } else {
        return (
          <div className="flex">
            <div className="flex flex-col text-bluedark justify-center h-full w-1/2 mt-20 gap-10">
              <h2 className="w-4/5 font-saira font-semibold text-[40px] leading-snug">
                The Best Furniture Manufacturer of your choice
              </h2>
              <span className="font-saira font-normal text-[20px] leading-relaxed w-4/5">
                Furnitre power is a software as services for multiperpose
                business management system, expecially for them who are running
                two or more business exploree the future Furnitre power is a
                software as services \
              </span>
            </div>
            <div className="w-1/2 h-1/4 justify-center items-center mt-20 ml-30">
              <img
                src={ContentImg}
                alt=""
                className="mb-10 w-3/4 h-112 object-cover object-center scale-105 rounded-lg overflow-hidden shrink-0"
              />
            </div>
          </div>
        );
    }
}