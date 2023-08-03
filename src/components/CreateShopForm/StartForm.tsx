import { ShopDatas } from "../../_interface";

interface Props {
    shopDatas: ShopDatas;
    setShopDatas: React.Dispatch<React.SetStateAction<ShopDatas>>;
}

export default function StartForm(props: Props) {
    const { shopDatas, setShopDatas } = props;

    return (
        <div className="start_form">
            <label>Nom de la boutique</label>
            <input
                type="text"
                placeholder="Company Shop"
                autoFocus
                value={shopDatas.shopName}
                onChange={(e) => {
                    setShopDatas({ ...shopDatas, shopName: e.target.value });
                }}
            />
            <label htmlFor="text">Langues de la boutique</label>
            <select
                onChange={(e) => {
                    setShopDatas({ ...shopDatas, langue: e.target.value });
                }}
            >
                <option value="fr">français</option>
                <option value="en">english</option>
            </select>
            <p>j'ai déjà une boutique <a href="/login">Se connecter</a></p>
        </div>
    )
}
