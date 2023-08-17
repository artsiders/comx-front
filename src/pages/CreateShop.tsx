import { useState } from "react";
import StartForm from "../components/CreateShopForm/StartForm";
import { SessionState, ShopDatas } from "../_interface";
import UploadLogo from "../components/CreateShopForm/UploadLogo";
import UserInfo from "../components/CreateShopForm/UserInfo";
import ShopInfo from "../components/CreateShopForm/ShopInfo";
import { useNavigate } from "react-router-dom";
import { AxiosError, AxiosResponse } from "axios";
import axiosURL from "../axiosConfig";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../feature/session.slice";
import { RootState } from "../app/store";

export default function CreateShop() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const session = useSelector((state: RootState) => state.session)
    if (session.connected) {
        navigate(`/my-shop/custom/`)
    }

    const [isLoading, setLoading] = useState<boolean>(false)
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
                    setLoading(true)
                    axiosURL.get(`/shop/check-shop-name?shopName=${shopDatas.shopName}`)
                        .then(({ data }: AxiosResponse) => {
                            if (data.type === "success") {
                                setPage((currPage) => currPage + 1);
                            } else {
                                toast(data.message, {
                                    type: data.type,
                                });
                            }
                            setLoading(false)
                        }).catch((err: AxiosError) => {
                            console.log(err)
                            setLoading(false)
                        })
                } else {
                    toast("Vous avez oublier de défini un nom pour votre boutique !");
                }

                break;
            case 1:
                if (!shopDatas.fullname) {
                    toast("Entrer votre nom s'il vous plait", {
                        type: "error",
                    });
                    return;
                }
                if (!shopDatas.password) {
                    toast("Créer un mot de passe s'il vous plait", {
                        type: "error",
                    });
                    return;
                }
                if (!shopDatas.phone) {
                    toast("Entrer votre numéro de téléphone s'il vous plait", {
                        type: "error",
                    });
                    return;
                }
                if (!shopDatas.email) {
                    toast("Entrer votre adresse E-mail s'il vous plait", {
                        type: "error",
                    });
                    return;
                } else {
                    setLoading(true)
                    axiosURL.get(`/users/check-email?email=${shopDatas.email}`)
                        .then(({ data }: AxiosResponse) => {
                            setLoading(false)
                            if (data.type !== "success") {
                                toast(data.message, {
                                    type: data.type,
                                });
                                return
                            }
                            setLoading(false)
                            setPage((currPage) => currPage + 1);
                        }).catch((err: AxiosError) => {
                            console.log(err)
                            setLoading(false)
                            return
                        })
                }


                break;
            case 2:
                if (!shopDatas.description) {
                    toast("Donnez une petite description a votre boutique", {
                        type: "error",
                    });
                    return;
                }
                setLoading(false)
                setPage((currPage) => currPage + 1);
                break;
            case 3:
                setLoading(true)
                if (!shopDatas.logo) {
                    toast("Importez un logo pour votre boutique.", {
                        type: "error",
                    });
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
                        const { Shop, User, token } = data.data as SessionState;
                        setLoading(false)
                        toast(data.message, {
                            type: data.type,
                        });

                        if (data.type === "success") {
                            dispatch(connect({
                                Shop: {
                                    shopName: Shop.shopName,
                                    logo: Shop.logo,
                                    adresse: Shop.adresse,
                                    description: Shop.description,
                                    langue: Shop.langue,
                                    _idUser: Shop._idUser,
                                    _id: Shop._id,
                                },
                                User: {
                                    email: User.email,
                                    fullname: User.fullname,
                                    phone: User.phone,
                                    _id: User._id,
                                },
                                connected: false,
                                token,
                            }))

                            navigate(`/my-shop/custom/`)
                        }
                    }).catch((err: AxiosError) => {
                        console.log(err)
                        setLoading(false)
                    })

                break;

            default:
                toast("Erreur inattendu !", {
                    type: "error",
                });
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
                        className="button-outline"
                        disabled={page == 0}
                        onClick={() => {
                            setPage((currPage) => currPage - 1);
                        }}
                    ><i className="fa fa-chevron-left"></i> Précédent</button>
                    <button
                        type="submit"
                        className={isLoading ? 'button-outline loading' : 'button-outline'}
                    >
                        {page === FormTitles.length - 1 ?
                            <>
                                Terminer
                                {isLoading ? <i className="fa fa-spinner fa-pulse fa-loader"></i> : <i className="fa fa-check"></i>}
                            </>
                            :
                            <>
                                Suivant
                                {isLoading ? <i className="fa fa-spinner fa-pulse fa-loader"></i> : <i className="fa fa-chevron-right"></i>}

                            </>
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}
