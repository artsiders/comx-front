import { Routes, Route } from "react-router-dom";
import CreateShop from "./pages/CreateShop";
import FormLayout from "./components/CreateShopForm/FormLayout";
import UserShop from "./pages/UserShop";
import CustomShop from "./pages/CustomShop";
import UserDasboardLayout from "./components/userDasboard/UserDasboardLayout";
import UserProducts from "./pages/UserProducts";
import UserCategories from "./pages/UserCategories";

const Routeur = () => {
  return (
    <Routes>
      <Route path="/" element={<FormLayout />} >
        <Route path="/" element={<CreateShop />} />
      </Route>
      <Route path="/" element={<UserDasboardLayout />} >
        <Route path="/my-shop/custom/:shopName" element={<CustomShop />} />
        <Route path="/my-shop/custom/:shopName/products" element={<UserProducts />} />
        <Route path="/my-shop/custom/:shopName/categories" element={<UserCategories />} />
      </Route>
      <Route path="/my-shop/:shopName" element={<UserShop />} />
    </Routes>
  );
};

export default Routeur;
