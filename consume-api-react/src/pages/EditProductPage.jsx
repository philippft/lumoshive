import Input from "../components/Input";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

export default function EditProductPage({ title, setTitle, price, setPrice, handleSubmit, modalConfig, setModalConfig }) {

  return (
    <div className="bg-slate-600 min-h-screen w-full">
      <Link to={`/`}>
        <Button
          className="m-4 p-3 bg-slate-700 text-white border border-slate-700 rounded-lg hover:bg-slate-900 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:-translate-y-1"
          text="Kembali"
        />
      </Link>
      <div className="flex flex-col items-center bg-slate-600 min-h-screen w-full justify-center p-6">
        <div className="flex flex-col justify-center p-6">
          <h1 className="bg-slate-700 p-2 w-112 text-center text-white text-2xl border rounded-md font-bold mb-8">
            Edit Product Page
          </h1>
          <form className="w-full max-w-md flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-md border border-slate-100">
            <Input
              type="text"
              // placeholder="Masukan Nama Barang"
              pText="Nama Barang: "
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              type="number"
              // placeholder="Masukan Harga Barang"
              pText="Harga Barang: "
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <Button
              text="Edit Barang"
              className="bg-slate-700 hover:bg-slate-800 border border-transparent rounded-lg py-3 text-white font-semibold transition-all mt-2"
              onClick={handleSubmit}
            />
          </form>
        </div>

        <Modal
          isOpen={modalConfig.isOpen}
          onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
          {...modalConfig}
        />
      </div>
    </div>
  );
}
