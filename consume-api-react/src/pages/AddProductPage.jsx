import { useState } from "react";
import Button from "../components/Button"
import Input from "../components/Input"
import { AddProduct } from "../services/api";
import Modal from "../components/Modal";


export default function AddProductPage () {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalConfig, setModalConfig] = useState({
      title: "",
      message: "",
      type: "",
    });

    const handleSubmit = async (e) => {
      e.preventDefault();

      const payload = {
        title: title,
        price: parseFloat(price),
        description: "No description provided.",
        category: "electronic",
        image: "https://via.placeholder.com/150",
      };

      try {
        const res = await AddProduct(payload);
        // console.log(res);
        setModalConfig({
          title: "Berhasil!",
          message: `Produk ${res.data.title || title} sudah masuk ke sistem FakeStore.`,
          type: "success",
        });
        setIsModalOpen(true);
        setPrice("");
        setTitle("");
      } catch (error) {
        // console.log(error);
        setModalConfig({
          title: "Waduh, Gagal!",
          message: `Error: "${error}"`,
          type: "error",
        });
        setIsModalOpen(true);
      }
    };

    return (
      <div className="flex flex-col items-center bg-slate-600 min-h-screen w-full justify-center min-h-[80vh] p-6">
        <h1 className="bg-slate-700 p-2 w-112 text-center text-white text-2xl fborder rounded-md ont-bold mb-8">
          Add Product Page
        </h1>

        <form className="w-full max-w-md flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-md border border-slate-100">
          <Input
            type="text"
            placeholder="Masukan Nama Barang"
            pText="Nama Barang: "
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Masukan Harga Barang"
            pText="Harga Barang: "
            onChange={(e) => setPrice(e.target.value)}
          />

          <Button
            text="Tambah Barang"
            className="bg-slate-700 hover:bg-slate-800 border border-transparent rounded-lg py-3 text-white font-semibold transition-all mt-2"
            onClick={handleSubmit}
          />
        </form>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          {...modalConfig}
        />
      </div>
    );
}