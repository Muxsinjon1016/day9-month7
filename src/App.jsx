import { React } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/login";
import { MainLayout } from "./layout/mainLayout";
import { Home } from "./pages/home";
import { NotFound } from "./layout/notFound";
import { AllProducts } from "./pages/products/allProducts";
import { CategoryProducts } from "./pages/home/components/categoryProducts";
import { NewCategoryForm } from "./components/newCategoryForm";
import { EditCategoryForm } from "./components/editCategoryForm";
import { AddProduct } from "./pages/products/components/addProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="all-products" element={<AllProducts />} />
          <Route path="category-products/:id" element={<CategoryProducts />} />
          <Route path="new-category-form" element={<NewCategoryForm />} />
          <Route path="edit-category-form/:id" element={<EditCategoryForm />} />
          <Route path="/add-new-product" element={<AddProduct />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
