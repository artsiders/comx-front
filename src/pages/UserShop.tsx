import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import HeroTop from "../components/HeroTop";
import TopBar from "../components/TopBar";
import { Product, ShopUser } from "../_interface";
import ProductCart from "../components/ProductCart";
import axiosURL from "../axiosConfig";
import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { slugToText } from "../_utils";

const UserShop = () => {
  const { shopName } = useParams();
  const [isShop, setIsShop] = useState(true)

  const session = useSelector((state: RootState) => state.session)

  const [products, setProducts] = useState<Product[]>([])

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
    axiosURL.get(`/shop/${slugToText(shopName || "")}`)
      .then(({ data }: AxiosResponse) => {
        if (data.type !== "success") {
          setIsShop(false)
        }
        setSetshopUserDatas(data.data)

      }).catch((err: AxiosError) => console.log(err))
  }, [shopName, navigate])

  useEffect(() => {
    axiosURL.get(`/products/all/${session.Shop._id}`)
      .then(({ data }: AxiosResponse) => {
        if (data.type === "success") {
          setProducts(data.data)
        }
      }).catch((err: AxiosError) => console.log(err))

  }, [session])

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
