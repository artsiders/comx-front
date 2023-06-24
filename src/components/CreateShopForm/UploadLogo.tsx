import { ShopDatas } from "../../_interface";

interface Props {
    shopDatas: ShopDatas;
    setShopDatas: React.Dispatch<React.SetStateAction<ShopDatas>>;
}

export default function UploadLogo(props: Props) {
    const { shopDatas, setShopDatas } = props;

    console.log(shopDatas.logo);

    return (
        <div>
            imprtez le logo de votre entreprise (Boutique) <br />
            <input
                type="file"
                placeholder=""
                value={shopDatas.logo}
                onChange={(e) => {
                    setShopDatas({ ...shopDatas, shopName: e.target.value });
                }}
            />
        </div>
    )
}
