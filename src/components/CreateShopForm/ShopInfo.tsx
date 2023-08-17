import { useEffect, useState } from "react";
import { ShopDatas } from "../../_interface";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface Props {
    shopDatas: ShopDatas;
    setShopDatas: React.Dispatch<React.SetStateAction<ShopDatas>>;
}

export default function ShopInfo(props: Props) {
    const { shopDatas, setShopDatas } = props;
    const [description, setDescription] = useState('');

    useEffect(() => {
        return () => {
            setShopDatas({ ...shopDatas, description: description })
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [description])

    return (
        <div>
            <label>Adresse de la boutique</label>
            <input
                type="text"
                placeholder="123 rue de la Ville 75001 Paris (facultatif)"
                autoFocus
                value={shopDatas.adresse}
                onChange={(e) => {
                    setShopDatas({ ...shopDatas, adresse: e.target.value });
                }}
            />
            <label htmlFor="email">Description de la boutique</label>
            <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
            />
        </div>
    )
}
