import { slugToText } from "../_utils";

interface Props {
  shopName: string;
}
const HeroTop = (props: Props) => {
  return (
    <div className="herotop" style={{ backgroundImage: "url('/images/herotop.webp')" }}>
      <div className="hero_content">
        <h1>{slugToText(props.shopName)}</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
          facere?
        </p>
        <button>Contactez nous</button>
      </div>
    </div>
  );
};

export default HeroTop;
