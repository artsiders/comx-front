import { ShopDatas } from "../../_interface";

interface Props {
    shopDatas: ShopDatas;
    setShopDatas: React.Dispatch<React.SetStateAction<ShopDatas>>;
}

export default function UserInfo(props: Props) {
    const { shopDatas, setShopDatas } = props;

    console.log(shopDatas.shopName);

    return (
        <div>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                placeholder="exemple@gmail.com"
                value={shopDatas.email}
                onChange={(e) => {
                    setShopDatas({ ...shopDatas, email: e.target.value });
                }}
            />
            <label htmlFor="fullname">Nom complet</label>
            <input
                type="text"
                id="fullname"
                placeholder=""
                value={shopDatas.fullname}
                onChange={(e) => {
                    setShopDatas({ ...shopDatas, fullname: e.target.value });
                }}
            />
            <label htmlFor="text">Mot de passe</label>
            <input
                type="password"
                placeholder=""
                value={shopDatas.password}
                onChange={(e) => {
                    setShopDatas({ ...shopDatas, password: e.target.value });
                }}
            />
            <label htmlFor="text">Téléphone</label>
            <input
                type="tel"
                placeholder=""
                value={shopDatas.phone}
                onChange={(e) => {
                    setShopDatas({ ...shopDatas, phone: e.target.value });
                }}
            />
        </div>
    )
}
