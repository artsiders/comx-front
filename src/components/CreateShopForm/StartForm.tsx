import { ShopDatas } from "../../_interface";

interface Props {
    shopDatas: ShopDatas;
    setShopDatas: React.Dispatch<React.SetStateAction<ShopDatas>>;
}

export default function StartForm(props: Props) {
    const { shopDatas, setShopDatas } = props;

    return (
        <div className="start_form">
            Commençons. <br /> Quel est le nom de votre entrepise ? <br />
            <input
                type="text"
                placeholder=""
                autoFocus
                value={shopDatas.shopName}
                onChange={(e) => {
                    setShopDatas({ ...shopDatas, shopName: e.target.value });
                }}
            />
        </div>
    )
}
