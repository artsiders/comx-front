import { useState } from "react";
import { ShopDatas } from "../../_interface";

interface Props {
    shopDatas: ShopDatas;
    setShopDatas: React.Dispatch<React.SetStateAction<ShopDatas>>;
}

export default function UploadLogo(props: Props) {
    const { shopDatas, setShopDatas } = props;
    const [file, setFile] = useState<any>();

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;
        setFile(URL.createObjectURL(file));
        setShopDatas({ ...shopDatas, logo: file.name });
    }

    return (
        <div className="upload_logo">
            <img src={file ? file : '/images/default-logo.webp'} alt="logo-example" />
            <input
                type="file"
                id="logo"
                placeholder=""
                onChange={handleChange}
            />
            <label htmlFor="logo">choisez une image <i className="fa fa-image"></i></label>
        </div>
    )
}
