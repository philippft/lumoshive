import Button from "../components/Button";
import Input from "../components/Input";
import Modal from "../components/Modal";

export default function AddProductPage({ title, setTitle, price, setPrice, modalConfig, setModalConfig, handleSubmit }) {

  return (
    <div className="flex flex-col items-center bg-slate-600 min-h-screen w-full justify-center p-6">
      <h1 className="bg-slate-700 p-2 w-112 text-center text-white text-2xl border rounded-md font-bold mb-8">
        Add Product Page
      </h1>

      <form className="w-full max-w-md flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-md border border-slate-100">
        <Input
          type="text"
          placeholder="Masukan Nama Barang"
          pText="Nama Barang: "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Masukan Harga Barang"
          pText="Harga Barang: "
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <Button
          text="Tambah Barang"
          className="bg-slate-700 hover:bg-slate-800 border border-transparent rounded-lg py-3 text-white font-semibold transition-all mt-2"
          onClick={handleSubmit}
        />
      </form>

      <Modal
        isOpen={modalConfig.isOpen}
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
        {...modalConfig}
      />
    </div>
  );
}
