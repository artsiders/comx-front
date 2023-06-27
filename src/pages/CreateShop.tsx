import { useState } from "react";
import StartForm from "../components/CreateShopForm/StartForm";
import { ShopDatas } from "../_interface";
import UploadLogo from "../components/CreateShopForm/UploadLogo";
import UserInfo from "../components/CreateShopForm/UserInfo";
import ShopInfo from "../components/CreateShopForm/ShopInfo";
import { useNavigate } from "react-router-dom";
import { textToSlug } from "../_utils";
import axios, { AxiosError, AxiosResponse } from "axios";

export default function CreateShop() {
    const navigate = useNavigate()
    const [page, setPage] = useState(0);
    const [shopDatas, setShopDatas] = useState<ShopDatas>({
        shopName: "",
        logo: "",
        email: "",
        adresse: "",
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

    const handleNavigation = () => {

        if (page === FormTitles.length - 1) {
            navigate(`/my-shop/${textToSlug(shopDatas.shopName)}`)
        } else {
            switch (page) {
                case 0:
                    axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/shop/check-shop-name?shopName=${shopDatas.shopName}`)
                        .then(({ data }: AxiosResponse) => {
                            if (data.type === "success") {
                                setPage((currPage) => currPage + 1);
                            } else {
                                // code 
                                console.log(data);
                            }
                        }).catch((err: AxiosError) => console.log(err))
                    break;

                default:
                    break;
            }
        }
    }


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
                        onClick={handleNavigation}
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
