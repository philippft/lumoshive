import { useState, useEffect } from "react";
import { getCategory } from "../services/api";
import ProductPage from "../pages/ProductPage";

export default function ProductContainer() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchCategory = async () => {
            const res = await getCategory();
            setData(res.data.category);
        }
        fetchCategory();
    }, []);

  return <ProductPage data={data} />;
}
