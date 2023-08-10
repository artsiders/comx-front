import { useState } from "react"
import { ShopUser, Theme } from "../_interface"
import axiosURL from "../axiosConfig";
import { AxiosError, AxiosResponse } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { toast } from "react-toastify"
import { updateSession } from "../feature/session.slice";

export default function CustomShop() {
    const [isEditing, setIsEditing] = useState(false)
    const dispatch = useDispatch()

    const { User, Shop } = useSelector((state: RootState) => state.session);

    const [shopDatas, setShopDatas] = useState<ShopUser["Shop"]>({
        shopName: Shop.shopName,
        logo: Shop.logo,
        adresse: Shop.adresse,
        description: Shop.description,
        langue: Shop.langue,
        _idUser: Shop._idUser,
        _id: Shop._id,
    })
    const [userDatas, setUserDatas] = useState<ShopUser["User"]>({
        email: User.email,
        fullname: User.fullname,
        phone: User.phone,
        _id: User._id,
    })

    const themes: Theme[] = [
        {
            image: "thumb-theme-1.webp",
            name: "Theme 1",
            date: "2023-28-12",
        },
        {
            image: "thumb-theme-2.webp",
            name: "Theme 2",
            date: "2023-28-12",
        },
        {
            image: "thumb-theme-3.webp",
            name: "Theme 3",
            date: "2023-28-12",
        },
    ];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        axiosURL.patch(`/shop/${userDatas._id}`, { Shop: shopDatas, User: userDatas })
            .then(({ data }: AxiosResponse) => {
                toast(data.message, {
                    type: data.type,
                })
                if (data.type === "success") {
                    dispatch(updateSession(data.data))
                    setIsEditing(false)
                }
            }).catch((err: AxiosError) => {
                toast("Une erreur innattendue est survenu !", {
                    type: 'error',
                })
                console.log(err);
            })
    }

    return (
        <div className="custom_shop">
            <span>Théme <mark>béta</mark></span>
            <section className="current_theme">
                <div className="cover" style={{ backgroundImage: 'url(/images/theme-cover.webp)' }}>
                    <div>
                        <div className="card_theme">
                            <img src="/images/thumb-theme-1.webp" alt="current_theme" />
                            <div className="text">
                                <div className="name">Basique thème</div>
                                <div className="date">Date: 2023-28-12</div>
                                <div className="date">Auteur: <mark>
                                    <a
                                        href="mailto:salim.artsider@gmail.com"
                                        className="link"
                                        style={{ textDecoration: "none" }}
                                    >salim sama</a>
                                </mark></div>
                            </div>
                        </div>
                        <button className="button">Customiser <i className="fa fa-paint-brush"></i></button>
                    </div>
                </div>
            </section>

            <section className="choise_theme">
                <span>Choisissez un théme pour votre boutique <mark>béta</mark></span>
                <div className="themes">
                    {themes.map((theme: Theme, key: number) =>
                        <div className="card_theme" key={key}>
                            <div className="image">
                                <img src={`/images/${theme.image}`} alt={theme.name} />
                            </div>
                            <div className="details">
                                <h3 className="name">{theme.name}</h3>
                                <p className="date">{theme.date}</p>
                                <button className="button">
                                    Choisir
                                    <i className='fa fa-check'></i>
                                </button>
                            </div>
                        </div>)}
                </div>
            </section>

            <section className="shop_info">
                <div className="cover"
                    style={{
                        background: `linear-gradient(
                            to top, 
                            rgb(0 0 0 / .9), rgb(0 0 0 / 0)
                        ), url(/images/herotop.webp)`,
                    }}
                >
                    <span>Informations relative à votre boutique!</span>
                    <div className="logo">
                        <label htmlFor="logo-input" className="fa fa-edit"></label>
                        <img src="/images/logo.webp" alt="shop_logo" />
                        <input id="logo-input" type="file" name="file" hidden />
                    </div>
                </div>
                <div className="content">
                    <div className="side"></div>
                    {!isEditing ?
                        <div className="box_info">
                            <ul>
                                <li>
                                    <i className="fa fa-shopping-bag"></i>
                                    <strong>{Shop.shopName}</strong>
                                </li>
                                <li>
                                    <i className="fa fa-user"></i>
                                    {User.fullname}
                                </li>
                                <li>
                                    <i className="fa fa-at"></i>
                                    {User.email}
                                </li>
                                <li>
                                    <i className="fa fa-phone"></i>
                                    {User.phone}
                                </li>
                                <li>
                                    <i className="fa fa-address-card"></i>
                                    {Shop.adresse}
                                </li>
                                <li>
                                    <i className="fa fa-language"></i>
                                    {Shop.langue}
                                </li>
                            </ul>
                            <a
                                href="/"
                                className="link"
                                onClick={(e) => {
                                    e.preventDefault()
                                    setIsEditing(true)
                                }}
                            >Modifier les informations</a>
                        </div>
                        :
                        <form
                            className="box_info form"
                            onSubmit={handleSubmit}
                        >
                            <ul>
                                <li>
                                    <i className="fa fa-shopping-bag"></i>
                                    <div>
                                        <label>Nom de la boutique</label>
                                        <input
                                            type="text"
                                            className="input"
                                            value={shopDatas.shopName}
                                            onChange={(e) => setShopDatas({ ...shopDatas, shopName: e.currentTarget.value })}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <i className="fa fa-at"></i>
                                    <div>
                                        <label>Nom et prénom</label>
                                        <input
                                            type="text"
                                            className="input"
                                            value={userDatas.fullname}
                                            onChange={(e) => setUserDatas({ ...userDatas, fullname: e.currentTarget.value })}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <i className="fa fa-phone"></i>
                                    <div>
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            className="input"
                                            value={userDatas.email}
                                            onChange={(e) => setUserDatas({ ...userDatas, email: e.currentTarget.value })}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <i className="fa fa-address-card"></i>
                                    <div>
                                        <label>Téléphone</label>
                                        <input
                                            type="number"
                                            className="input"
                                            value={userDatas.phone}
                                            onChange={(e) => setUserDatas({ ...userDatas, phone: parseInt(e.currentTarget.value) })}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <i className="fa fa-language"></i>
                                    <div>
                                        <label>Adresse</label>
                                        <input
                                            type="text"
                                            className="input"
                                            value={shopDatas.adresse}
                                            onChange={(e) => setShopDatas({ ...shopDatas, adresse: e.currentTarget.value })}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <i className="fa fa-user"></i>
                                    <div>
                                        <label>Langue</label>
                                        <select
                                            className="input"
                                            value={shopDatas.langue}
                                            onChange={(e) => {
                                                setShopDatas({ ...shopDatas, langue: e.currentTarget.value })
                                            }}
                                        >
                                            <option value="fr">Français</option>
                                            <option value="en">Anglais</option>
                                        </select>
                                    </div>
                                </li>
                            </ul>
                            <div className="buttons">
                                <button className="button">
                                    Enregistrer
                                    <i className="fa fa-save"></i>
                                </button>
                                <button
                                    className="button-outline cancel"
                                    onClick={() => setIsEditing(false)}
                                >
                                    Annuler
                                    <i className="fa fa-close"></i>
                                </button>
                            </div>
                        </form>

                    }

                </div>
            </section>
        </div>
    )
}
