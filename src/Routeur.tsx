import { Routes, Route } from "react-router-dom";
import CreateShop from "./pages/CreateShop";
import FormLayout from "./components/CreateShopForm/FormLayout";
import UserShop from "./pages/UserShop";
import CustomShop from "./pages/CustomShop";

const Routeur = () => {
  return (
    <Routes>
      <Route path="/" element={<FormLayout />} >
        <Route path="/" element={<CreateShop />} />
      </Route>
      <Route path="/my-shop/custom/:shopName" element={<CustomShop />} />
      <Route path="/my-shop/:shopName" element={<UserShop />} />
    </Routes>
  );
};

export default Routeur;
