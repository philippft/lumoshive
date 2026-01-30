import Button from "../components/Button";
import Label from "../components/Label";
import { Link } from "react-router-dom";

export default function DetailProductPage({ product }) {
  console.log(product);
  return (
    <div className="bg-slate-600 min-h-screen w-full">
      <Link to={`/products`}>
        <Button
          className="m-4 p-3 bg-slate-700 text-white border border-slate-700 rounded-lg hover:bg-slate-900 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:-translate-y-1"
          text="Kembali"
        />
      </Link>
      <div className="flex justify-center p-6">
        <div className="max-w-md w-full bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
          <div className="bg-white p-6">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-contain"
            />
          </div>

          <div className="p-6 flex flex-col gap-4 text-sky-50">
            <h1 className="text-xl font-bold text-white leading-tight">
              {product.title}
            </h1>

            <div className="flex flex-col gap-2">
              <span className="bg-sky-600/20 text-sky-400 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit">
                {product.category}
              </span>

              <div className="mt-2">
                <Label
                  text="Deskripsi Produk:"
                  className="font-bold text-sky-400 mb-1"
                />
                <p className="text-sm text-slate-300 leading-relaxed text-justify">
                  {product.description}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-700">
              <div className="flex flex-col">
                <span className="text-xs text-slate-400">Harga</span>
                <span className="text-2xl font-black text-white">
                  ${product.price}
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs text-slate-400">Rating</span>
                <span className="text-lg font-bold text-yellow-400">
                  ⭐ {product.rating?.rate}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
