import { Routes, Route } from "react-router-dom";
import ProductListPage from "../pages/AllProductLists";
import AddProductPage from "../pages/AddProductPage";
// import EditProductPage from "../pages/products/EditProductPage";

export default function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/products/add" element={<AddProductPage />} />
            {/* <Route path="/products/:id/edit" element={<EditProductPage />} /> */}
        </Routes>
    )
}
