import { useState } from "react";
import StartForm from "../components/CreateShopForm/StartForm";
import { ShopDatas } from "../_interface";
import UploadLogo from "../components/CreateShopForm/UploadLogo";
import UserInfo from "../components/CreateShopForm/UserInfo";
import ShopInfo from "../components/CreateShopForm/ShopInfo";
import { useNavigate } from "react-router-dom";
import { textToSlug } from "../_utils";
import { AxiosError, AxiosResponse } from "axios";
import axiosURL from "../axiosConfig";

export default function CreateShop() {
    const navigate = useNavigate()
    const [page, setPage] = useState(0)
    const [shopDatas, setShopDatas] = useState<ShopDatas>({
        shopName: "",
        logo: "",
        email: "",
        adresse: "",
        description: "",
        fullname: "",
        password: "",
        phone: "",
        langue: "fr",
    });

    const FormTitles: string[] = [
        "Commençons. Quel est le nom de votre entrepise ?",
        "Informations personnels",
        "Information sur la boutique",
        "Importez le logo de votre entreprise (Boutique)",
    ];

    const PageDisplay = () => {
        if (page === 0) {
            return <StartForm shopDatas={shopDatas} setShopDatas={setShopDatas} />;
        } else if (page === 1) {
            return <UserInfo shopDatas={shopDatas} setShopDatas={setShopDatas} />;
        } else if (page === 2) {
            return <ShopInfo shopDatas={shopDatas} setShopDatas={setShopDatas} />;
        } else {
            return <UploadLogo shopDatas={shopDatas} setShopDatas={setShopDatas} />;
        }
    };

    const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formdata: FormData = new FormData(e.currentTarget);

        switch (page) {
            case 0:
                if (shopDatas.shopName) {
                    axiosURL.get(`/shop/check-shop-name?shopName=${shopDatas.shopName}`)
                        .then(({ data }: AxiosResponse) => {
                            if (data.type === "success") {
                                setPage((currPage) => currPage + 1);
                            } else {
                                // code
                                console.log(data);
                            }
                        }).catch((err: AxiosError) => console.log(err))
                }

                break;
            case 1:
                if (!shopDatas.fullname) {
                    return;
                }
                if (!shopDatas.email) {
                    return;
                }
                if (!shopDatas.password) {
                    return;
                }
                if (!shopDatas.phone) {
                    return;
                }
                setPage((currPage) => currPage + 1);

                break;
            case 2:
                if (!shopDatas.adresse) {
                    return;
                }
                if (!shopDatas.description) {
                    return;
                }
                setPage((currPage) => currPage + 1);
                break;
            case 3:
                if (!shopDatas.logo) {
                    return;
                }
                formdata.append("shopName", shopDatas.shopName)
                formdata.append("email", shopDatas.email)
                formdata.append("adresse", shopDatas.adresse)
                formdata.append("description", shopDatas.description)
                formdata.append("fullname", shopDatas.fullname)
                formdata.append("password", shopDatas.password)
                formdata.append("phone", shopDatas.phone)
                formdata.append("langue", shopDatas.langue)
                formdata.append("logo", shopDatas.logo)

                // for (const [key, value] of formdata.entries()) {
                //     console.log(`${key} : ${value}`);
                // }

                axiosURL.post(`/shop`, formdata)
                    .then(({ data }: AxiosResponse) => {
                        console.log(data);
                        // {
                        //     "type": "success",
                        //     "message": "Boutique créee avec succès",
                        //     "data": {
                        //         "shopName": "salim",
                        //         "logo": "salim.jpg",
                        //         "adresse": "AKENAIZP",
                        //         "description": "LFBZO",
                        //         "langue": "fr",
                        //         "_idUser": "64c36d07870cce73ca7a0f93",
                        //         "_id": "64c36d07870cce73ca7a0f95",
                        //         "__v": 0
                        //     }
                        // }
                        if (data.type === "success") {
                            navigate(`/my-shop/custom/${textToSlug(shopDatas.shopName)}/`)
                        }
                    }).catch((err: AxiosError) => {
                        // {
                        //     "message": "Request failed with status code 400",
                        //     "name": "AxiosError",
                        //     "stack": "AxiosError: Request failed with status code 400\n    at settle (http://localhost:5173/node_modules/.vite/deps/axios.js?v=7406a575:1189:12)\n    at XMLHttpRequest.onloadend (http://localhost:5173/node_modules/.vite/deps/axios.js?v=7406a575:1417:7)",
                        //     "config": {
                        //         "transitional": {
                        //             "silentJSONParsing": true,
                        //             "forcedJSONParsing": true,
                        //             "clarifyTimeoutError": false
                        //         },
                        //         "adapter": [
                        //             "xhr",
                        //             "http"
                        //         ],
                        //         "transformRequest": [
                        //             null
                        //         ],
                        //         "transformResponse": [
                        //             null
                        //         ],
                        //         "timeout": 5000,
                        //         "xsrfCookieName": "XSRF-TOKEN",
                        //         "xsrfHeaderName": "X-XSRF-TOKEN",
                        //         "maxContentLength": -1,
                        //         "maxBodyLength": -1,
                        //         "env": {},
                        //         "headers": {
                        //             "Accept": "application/json, text/plain, */*"
                        //         },
                        //         "baseURL": "http://127.0.0.1:5000",
                        //         "method": "post",
                        //         "url": "/shop",
                        //         "data": {}
                        //     },
                        //     "code": "ERR_BAD_REQUEST",
                        //     "status": 400
                        // }
                        console.log(err)
                    })

                break;

            default:
                setPage((currPage) => currPage + 1);
                break;
        }
    }

    // useEffect(() => {
    //     document.addEventListener('keypress', (e: KeyboardEvent) => {
    //         if (e.keyCode === 13) {
    //             if (submit.current) {
    //                 submit.current.click()
    //             }
    //         }
    //     })
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    return (
        <div className="create_shop_page">
            <form onSubmit={handelSubmit} encType="multipart/form-data">
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
                        type="submit"
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
