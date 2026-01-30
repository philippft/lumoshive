import { Routes, Route } from "react-router-dom";
import AddProductPage from "../pages/AddProductPage";
import ProductListContainer from "../containers/ProductListContainer";
import DetailProductContainer from "../containers/DetailProductContainer";
// import DetailProductPage from "../pages/DetailProductPage";
// import EditProductPage from "../pages/products/EditProductPage";

export default function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element={<ProductListContainer />} />
            <Route path="/products" element={<ProductListContainer />} />
            <Route path="/product/:id" element={<DetailProductContainer />} />
            <Route path="/products/add" element={<AddProductPage />} />
            {/* <Route path="/products/:id/edit" element={<EditProductPage />} /> */}
        </Routes>
    )
}
