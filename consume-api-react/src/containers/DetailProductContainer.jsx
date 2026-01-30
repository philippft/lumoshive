import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/api";
import DetailProductPage from "../pages/DetailProductPage";

export default function ProductListContainer() {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  const fetchProduct = async () => {
    try {
      const res = await getProduct(id);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  }; 

  useEffect(() => {
    if (id) fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-slate-900">
        <p className="text-white text-xl animate-pulse">Loading data produk...</p>
      </div>
    );
  }

  return <DetailProductPage product={product} />;
}
