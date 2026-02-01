import { Routes, Route } from "react-router-dom";
import ProductListContainer from "../containers/ProductListContainer";
import DetailProductContainer from "../containers/DetailProductContainer";
import EditProductContainer from "../containers/EditProductContainer";
import AddProductContainer from "../containers/AddProductContainer";

export default function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element={<ProductListContainer />} />
            <Route path="/products" element={<ProductListContainer />} />
            <Route path="/product/:id" element={<DetailProductContainer />} />
            <Route path="/products/add" element={<AddProductContainer />} />
            <Route path="/product/edit/:id" element={<EditProductContainer />} />
        </Routes>
    )
}
