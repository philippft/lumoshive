import Tambah from "../assets/tambah.svg";

export default function AllProductCard({ img, title, price, priceDiscount }) {
  // console.log(priceDiscount);
  return (
    <div className="w-1/5">
      <div
        className="m-6 w-85 h-90 p-10 border border-gray-300 rounded-xl bg-cover bg-center rounded-t-xl relative"
        style={{ backgroundImage: `url('${img}')` }}
      >
        <div className="absolute bottom-4 right-4 text-darkblue shadow-sm hover:bg-white transition-all rounded-full cursor-pointer">
          <img src={Tambah} alt="" />
        </div>
      </div>
      <div className="flex flex-col ml-7">
        <h1 className="font-saira font-semibold text-2xl">{title}</h1>

        <div className="flex items-center mt-4 mb-6 gap-9 font-saira">
          {priceDiscount && (
            <>
              <span className=" font-semibold text-base">${priceDiscount}</span>
              <span className="text-sm text-gray-400 line-through">
                ${price}
              </span>
            </>
          )}
          {!priceDiscount && <span className="font-semibold text-base">${price}</span>}
        </div>
      </div>
    </div>
  );
}
