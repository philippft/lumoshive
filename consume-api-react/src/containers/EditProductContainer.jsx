import EditProductPage from "../pages/EditProductPage";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { getProduct, UpdateProduct } from "../services/api";

export default function EditProductContainer() {
  const { id } = useParams();
  const { modalConfig, setModalConfig } =
    useContext(ProductContext);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const fetchDetail = async () => {
      const res = await getProduct(id);
      if (res) {
        setTitle(res.data.title);
        setPrice(res.data.price);
      }
    };
    fetchDetail();
  }, [id]);

  const handleEditProduct = async (id, data) => {
    try {
      const res = await UpdateProduct(data, id);
      setModalConfig({
        isOpen: true,
        mode: "edit",
        title: "Update Berhasil!",
        message: `Produk ${res.data.title} berhasil diedit.`,
        type: "success",
        onConfirm: null,
      });
    } catch (error) {
      setModalConfig({
        isOpen: true,
        title: "Update Gagal!",
        message: error.message,
        type: "error",
        onConfirm: null,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, price: parseFloat(price) };
    console.log(data);
    handleEditProduct(id, data);
  };

  return (
    <EditProductPage
      title={title}
      setTitle={setTitle}
      price={price}
      setPrice={setPrice}
      handleSubmit={handleSubmit}
      modalConfig={modalConfig}
      setModalConfig={setModalConfig}
    />
  );
}
