import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import HeroTop from "../components/HeroTop";
import TopBar from "../components/TopBar";
import { Product } from "../_interface";
import ProductCart from "../components/ProductCart";

const UserShop = () => {
  const { shopName } = useParams();
  const products: Product[] = [
    {
      _id: 1,
      name: "sac à dos",
      price: 100000,
      image: "sac-a-dos.jpg",
    },
    {
      _id: 2,
      name: "sac à dos",
      price: 100000,
      image: "sac-a-dos.jpg",
    },
    {
      _id: 3,
      name: "sac à dos",
      price: 100000,
      image: "sac-a-dos.jpg",
    },
  ]
  return (
    <div className="user_shop">
      <TopBar />

      <HeroTop shopName={shopName || "Shop name"} />

      <section className="product-section">
        <h1>Articles de la boutique</h1>
        <div className="product-grid">
          {products.map((product: Product, key: number) => (
            <ProductCart product={product} key={key} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UserShop;
