import { useState } from "react";
import StartForm from "../components/CreateShopForm/StartForm";
import { ShopDatas } from "../_interface";
import UploadLogo from "../components/CreateShopForm/UploadLogo";
import UserInfo from "../components/CreateShopForm/UserInfo";
import ShopInfo from "../components/CreateShopForm/ShopInfo";
import { useNavigate } from "react-router-dom";

export default function CreateShop() {
    const navigate = useNavigate()
    const [page, setPage] = useState(0);
    const [shopDatas, setShopDatas] = useState<ShopDatas>({
        shopName: "",
        logo: "",
        email: "",
        theme: "",
        description: "",
        fullname: "",
        password: "",
        phone: "",
    });

    const FormTitles: string[] = [
        "Commençons. Quel est le nom de votre entrepise ?",
        "Informations personnels",
        "Importez le logo de votre entreprise (Boutique)",
        "Information sur la boutique"
    ];

    const PageDisplay = () => {
        if (page === 0) {
            return <StartForm shopDatas={shopDatas} setShopDatas={setShopDatas} />;
        } else if (page === 1) {
            return <UserInfo shopDatas={shopDatas} setShopDatas={setShopDatas} />;
        } else if (page === 2) {
            return <UploadLogo shopDatas={shopDatas} setShopDatas={setShopDatas} />;
        } else {
            return <ShopInfo shopDatas={shopDatas} setShopDatas={setShopDatas} />;
        }
    };
    return (
        <div className="create_shop_page">
            <form>
                <div className="header">
                    {FormTitles[page]}
                </div>
                <div className="content">
                    {PageDisplay()}
                </div>
                <div className="btn-navigation">
                    <button
                        type="button"
                        disabled={page == 0}
                        onClick={() => {
                            setPage((currPage) => currPage - 1);
                        }}
                    ><i className="fa fa-chevron-left"></i> Précédent</button>
                    <button
                        type="button"
                        onClick={() => {
                            if (page === FormTitles.length - 1) {
                                navigate('/custom-shop')
                            } else {
                                setPage((currPage) => currPage + 1);
                            }
                        }}
                    >
                        {page === FormTitles.length - 1 ?
                            <>
                                Terminer
                                <i className="fa fa-check"></i>
                            </>
                            :
                            <>
                                Suivant
                                <i className="fa fa-chevron-right"></i>
                            </>
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}
