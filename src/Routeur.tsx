import { Routes, Route } from "react-router-dom";
import CreateShop from "./pages/CreateShop";
import FormLayout from "./components/CreateShopForm/FormLayout";
import UserShop from "./pages/UserShop";
import CustomShop from "./pages/CustomShop";
import UserDashboardLayout from "./components/userDasboard/UserDashboardLayout";
import UserProducts from "./pages/UserProducts";
import UserCategories from "./pages/UserCategories";
import UserOrder from "./pages/UserOrder";
import Form from "./pages/Form";

const Routeur = () => {
  return (
    <Routes>
      <Route element={<FormLayout />} >
        <Route path="/" element={<CreateShop />} />
        <Route path="/test" element={<Form />}></Route>
      </Route>
      <Route element={<UserDashboardLayout />} >
        <Route path="/my-shop/custom/:shopName" element={<CustomShop />} />
        <Route path="/my-shop/custom/:shopName/products" element={<UserProducts />} />
        <Route path="/my-shop/custom/:shopName/categories" element={<UserCategories />} />
        <Route path="/my-shop/custom/:shopName/commandes" element={<UserOrder />} />
      </Route>
      <Route path="/my-shop/:shopName" element={<UserShop />} />
    </Routes>
  );
};

export default Routeur;
