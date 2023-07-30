import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import HeroTop from "../components/HeroTop";
import TopBar from "../components/TopBar";
import { Product, ShopUser } from "../_interface";
import ProductCart from "../components/ProductCart";
import axiosURL from "../axiosConfig";
import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const UserShop = () => {
  const { shopName } = useParams();
  const [isShop, setIsShop] = useState(true)

  const [shopUserDatas, setSetshopUserDatas] = useState<ShopUser>({
    Shop: {
      shopName: "",
      logo: "",
      adresse: "",
      description: "",
      langue: "",
      _idUser: "",
      _id: "",
    },
    User: {
      email: "",
      fullname: "",
      password: "",
      phone: 0,
      _id: "",
    },
  })

  const navigate = useNavigate()

  useEffect(() => {
    axiosURL.get(`/shop/${shopName}`)
      .then(({ data }: AxiosResponse) => {
        if (data.type !== "success") {
          setIsShop(false)
        }
        setSetshopUserDatas(data.data)

      }).catch((err: AxiosError) => console.log(err))
  }, [shopName, navigate])


  const products: Product[] = [
    {
      _id: "1",
      name: "Toyota carina",
      description: "200km heure",
      price: 10000,
      priceAfterDiscount: 10000,
      statut: true,
      category: "vehicule",
      image: "card-1.webp",
      _idShop: "jbsfjebzo",
    },
    {
      _id: "1",
      name: "Mercedess benz",
      description: "200km heure",
      price: 10000,
      priceAfterDiscount: 10000,
      statut: true,
      category: "vehicule",
      image: "card-2.webp",
      _idShop: "jbsfjebzo",
    },
    {
      _id: "1",
      name: "Renauld twingo",
      description: "200km heure",
      price: 10000,
      priceAfterDiscount: 10000,
      statut: true,
      category: "vehicule",
      image: "card-3.webp",
      _idShop: "jbsfjebzo",
    },
  ]
  return (
    <>
      {isShop ?
        <div className="user_shop">
          <TopBar data={shopUserDatas} />

          <HeroTop data={shopUserDatas} />

          <section className="product-section">
            <h1>Articles de la boutique</h1>
            <div className="product-grid">
              {products.map((product: Product, key: number) => (
                <ProductCart product={product} key={key} />
              ))}
            </div>
          </section>

          <Footer data={shopUserDatas} />
        </div> :
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <p style={{ fontSize: 40 }}>404</p>
        </div>
      }
    </>
  );
};

export default UserShop;
