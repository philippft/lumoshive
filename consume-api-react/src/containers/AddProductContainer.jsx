import { AddProduct } from "../services/api";
import { ProductContext } from "../context/ProductContext";
import AddProductPage from "../pages/AddProductPage";
import { useState, useContext } from "react";

export default function AddProductContainer() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const { modalConfig, setModalConfig } = useContext (ProductContext);

  const handleAddProduct = async (title, price, onSuccess) => {
    const payload = {
      title,
      price: parseFloat(price),
      description: "No description provided.",
      category: "electronic",
      image: "https://via.placeholder.com/150",
    };

    try {
      const res = await AddProduct(payload);
      setModalConfig({
        isOpen: true,
        mode: "add",
        title: "Berhasil!",
        message: `Produk ${res.data.title} sudah masuk sistem.`,
        type: "success",
        onConfirm: null,
      });

      if (onSuccess) onSuccess();
    } catch (error) {
      setModalConfig({
        isOpen: true,
        title: "Waduh, Gagal!",
        message: `Error: ${error.message}`,
        type: "error",
        onConfirm: null,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleAddProduct(title, price, () => {
      setTitle("");
      setPrice("");
    });
  };

  return (
    <AddProductPage 
        title={title}
        setTitle={setTitle}
        price={price}
        setPrice={setPrice}
        modalConfig={modalConfig}
        setModalConfig={setModalConfig}
        handleSubmit={handleSubmit}
    />
  );
}
