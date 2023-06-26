import { ShopDatas } from "../../_interface";

interface Props {
    shopDatas: ShopDatas;
    setShopDatas: React.Dispatch<React.SetStateAction<ShopDatas>>;
}

export default function ShopInfo(props: Props) {
    const { shopDatas, setShopDatas } = props;

    return (
        <div>
            <label>Adresse de la boutique</label>
            <input
                type="text"
                placeholder="123 rue de la Ville 75001 Paris"
                autoFocus
                value={shopDatas.adresse}
                onChange={(e) => {
                    setShopDatas({ ...shopDatas, adresse: e.target.value });
                }}
            />
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
