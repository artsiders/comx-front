import { ShopDatas } from "../../_interface";

interface Props {
    shopDatas: ShopDatas;
    setShopDatas: React.Dispatch<React.SetStateAction<ShopDatas>>;
}

export default function ShopInfo(props: Props) {
    const { shopDatas, setShopDatas } = props;

    return (
        <div>
            Information suplémentaire sur la boutique !
            <label htmlFor="email">Thème de la boutique</label>
            <textarea
                value={shopDatas.theme}
                onChange={(e) => {
                    setShopDatas({ ...shopDatas, theme: e.target.value });
                }}
            >
            </textarea>
            <label htmlFor="email">Domaine d'activité</label>
            <textarea
                value={shopDatas.description}
                onChange={(e) => {
                    setShopDatas({ ...shopDatas, description: e.target.value });
                }}
            >
            </textarea>
        </div>
    )
}
