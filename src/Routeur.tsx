import { Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import CreateShop from "./pages/CreateShop";
import FormLayout from "./components/CreateShopForm/FormLayout";
import Home from "./pages/Home";

const Routeur = () => {
  return (
    <Routes>
      <Route path="/" element={<FormLayout />} >
        <Route path="/" element={<CreateShop />} />
      </Route>
      <Route path="/store" element={<Store />} />
      <Route path="/custom-shop" element={<Home />} />
    </Routes>
  );
};

export default Routeur;
