import { ShopUser } from "../_interface";
interface Props {
  data: ShopUser;
}

const HeroTop = ({ data }: Props) => {
  return (
    <div className="herotop" style={{ backgroundImage: "url('/images/herotop.webp')" }}>
      <div className="hero_content">
        <h1>{data.Shop.shopName}</h1>
        <p>
          {data.Shop.description}
        </p>
        <a style={{ textDecoration: "none" }} href={`tel:${data.User.phone}`}>
          <button>Contactez nous</button>
        </a>
      </div>
    </div>
  );
};

export default HeroTop;
