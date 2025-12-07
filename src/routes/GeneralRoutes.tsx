import { Route, Routes } from "react-router";
import { AddProductPage } from "../pages/products/AddProductPage";
import { LoginPage } from "../pages/authentication/LoginPage";
import { RegisterPage } from "../pages/authentication/RegisterPage";
import { Navbar } from "../components/ui/Navbar";
import { Footer } from "../components/ui/Footer";
import { NotFoundPage } from "../pages/notFound/NotFoundPage";
import { ShowProductPage } from "../pages/products/ShowProductPage";

export const GeneralRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ShowProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/addProduct" element={<AddProductPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};
