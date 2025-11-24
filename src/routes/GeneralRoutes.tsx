import { Route, Routes } from "react-router";
import { AddProductPage } from "../pages/AddProductPage";

export const GeneralRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AddProductPage />} />
        </Routes>
    )
}
