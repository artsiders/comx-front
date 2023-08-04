import { useState } from "react"
import { Theme } from "../_interface"

export default function CustomShop() {
    const [isEditing, setIsEditing] = useState(false)
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
    ]
    return (
        <div className="custom_shop">
            <span>Théme</span>
            <section className="current_theme">
                <div className="cover" style={{ backgroundImage: 'url(/images/theme-cover.webp)' }}>
                    <div>
                        <div className="card_theme">
                            <img src="/images/thumb-theme-1.webp" alt="current_theme" />
                            <div className="text">
                                <div className="name">Name theme</div>
                                <div className="date">2023-28-12</div>
                            </div>
                        </div>
                        <button className="button">Customiser <i className="fa fa-paint-brush"></i></button>
                    </div>
                </div>
            </section>
            <section className="choise_theme">
                <span>Choisissez un théme pour votre boutique</span>
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
                <div className="cover" style={{ backgroundImage: 'url(/images/herotop.webp)' }}>
                    <div className="logo">
                        <img src="/images/logo.webp" alt="shop_logo" />
                    </div>
                </div>
                <div className="content">
                    <div className="side"></div>
                    {!isEditing ?
                        <div className="box_info">
                            <ul>
                                <li>
                                    <i className="fa fa-shopping-bag"></i>
                                    <strong>shopName</strong>
                                </li>
                                <li>
                                    <i className="fa fa-user"></i>
                                    full name
                                </li>
                                <li>
                                    <i className="fa fa-at"></i>
                                    email
                                </li>
                                <li>
                                    <i className="fa fa-phone"></i>
                                    phone
                                </li>
                                <li>
                                    <i className="fa fa-address-card"></i>
                                    adresse
                                </li>
                                <li>
                                    <i className="fa fa-language"></i>
                                    langue
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
                        <form className="box_info form">
                            <ul>
                                <li>
                                    <i className="fa fa-shopping-bag"></i>
                                    <div>
                                        <label>Nom de la boutique</label>
                                        <input type="text" className="input" />
                                    </div>
                                </li>
                                <li>
                                    <i className="fa fa-at"></i>
                                    <div>
                                        <label>Nom et prénom</label>
                                        <input type="text" className="input" />
                                    </div>
                                </li>
                                <li>
                                    <i className="fa fa-phone"></i>
                                    <div>
                                        <label>Email</label>
                                        <input type="text" className="input" />
                                    </div>
                                </li>
                                <li>
                                    <i className="fa fa-address-card"></i>
                                    <div>
                                        <label>Téléphone</label>
                                        <input type="text" className="input" />
                                    </div>
                                </li>
                                <li>
                                    <i className="fa fa-language"></i>
                                    <div>
                                        <label>Adresse</label>
                                        <input type="text" className="input" />
                                    </div>
                                </li>
                                <li>
                                    <i className="fa fa-user"></i>
                                    <div>
                                        <label>Langue</label>
                                        <select className="input">
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
