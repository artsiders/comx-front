import { Routes, Route } from "react-router-dom";
import CreateShop from "./pages/CreateShop";
import FormLayout from "./components/CreateShopForm/FormLayout";
import UserShop from "./pages/UserShop";
import CustomShop from "./pages/CustomShop";
import UserDashboardLayout from "./components/userDasboard/UserDashboardLayout";
import UserProducts from "./pages/UserProducts";
import UserCategories from "./pages/UserCategories";
import UserOrder from "./pages/UserOrder";
import PrivateRoute from "./PrivateRoute";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import UserProductDetail from "./components/userDasboard/UserProductDetail";

const Routeur = () => {
  return (
    <Routes>
      <Route element={<FormLayout />} >
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-shop" element={<CreateShop />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route element={<UserDashboardLayout />} >
          <Route path="/my-shop/custom/" element={<CustomShop />} />
          <Route path="/my-shop/custom/products" element={<UserProducts />} />
          <Route path="/my-shop/custom/product/:_idProduct" element={<UserProductDetail />} />
          <Route path="/my-shop/custom/categories" element={<UserCategories />} />
          <Route path="/my-shop/custom/commandes" element={<UserOrder />} />
        </Route>
      </Route>

      <Route path="shop/:shopName" element={<UserShop />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routeur;
