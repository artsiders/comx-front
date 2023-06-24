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
            Information Personnel !
            <label htmlFor="email">Email</label>
            <input
                type="email"
                placeholder="exemple@gmail.com"
                value={shopDatas.email}
                onChange={(e) => {
                    setShopDatas({ ...shopDatas, email: e.target.value });
                }}
            />
            <label htmlFor="email">Nom</label>
            <input
                type="text"
                placeholder=""
                value={shopDatas.firstname}
                onChange={(e) => {
                    setShopDatas({ ...shopDatas, firstname: e.target.value });
                }}
            />
            <label htmlFor="text">premon</label>
            <input
                type="text"
                placeholder=""
                value={shopDatas.lastname}
                onChange={(e) => {
                    setShopDatas({ ...shopDatas, lastname: e.target.value });
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
