import { Product } from "../_interface"
import UserProductCart from "../components/userDasboard/UserProductCart"
import Pagination from "../components/Pagination"
import { useState } from "react"

export default function UserProducts() {
    const products: Product[] = [
        {
            _id: 1,
            name: "Renauld twingo",
            price: 1300000,
            image: "card-1.webp",
        },
        {
            _id: 2,
            name: "Mercedess",
            price: 2890000,
            image: "card-2.webp",
        },
        {
            _id: 3,
            name: "Toyota Carina",
            price: 630000,
            image: "card-3.webp",
        },
    ]

    const [isAdding, setIsAdding] = useState<boolean>(false)
    return (
        <div className="user_product">
            {isAdding ?
                <section className="add_product_form">
                    <form action="">
                        <div className="input_group">
                            <label htmlFor="productName">Titre</label>
                            <input
                                className="input"
                                type="text"
                                id="productName"
                                placeholder="samsung A1"
                                value={''}
                                onChange={(e) => {
                                    console.log(e);
                                }}
                            />
                            <label htmlFor="desciption">Description</label>
                            <textarea className="textarea"></textarea>
                        </div>


                        <div className="input_group multimedia">
                            <span>Image</span>
                            <label htmlFor="product-image">
                                <span>Ajouter une image a votre produit</span>
                                <i className="fa fa-image"></i>
                            </label>
                            <input
                                id="product-image"
                                className="input"
                                type="file"
                                placeholder="10000"
                                value={''}
                                onChange={(e) => {
                                    console.log(e);
                                }}
                            />
                        </div>


                        <div className="input_group price">
                            <label>Prix</label>
                            <label>Prix avant réduction</label>
                            <input
                                className="input"
                                type="number"
                                placeholder="0"
                                data-devise="FCFA"
                                value={''}
                                onChange={(e) => {
                                    console.log(e);
                                }}
                            />
                            <input
                                className="input"
                                type="number"
                                placeholder="0"
                                data-devise="FCFA"
                                value={''}
                                onChange={(e) => {
                                    console.log(e);
                                }}
                            />
                        </div>
                        <div className="input_group autre">
                            <label>statut</label>
                            <select>
                                <option value="1">Actifs</option>
                                <option value="0">Inactifs</option>
                            </select>
                            <label>Categorie</label>
                            <select>
                                <option value="technologie">technologie</option>
                                <option value="vetements">vetements</option>
                            </select>

                            <div className="buttons">
                                <button
                                    type="submit"
                                    style={{ marginRight: 20 }}
                                    className="button"
                                >
                                    Ajouter
                                    <i className="fa fa-check"></i>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsAdding(false)}
                                    style={{ backgroundColor: "var(--danger)" }}
                                    className="button"
                                >
                                    Annuler
                                    <i className="fa fa-close"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </section> : <section className="section">
                    <header>
                        <input
                            className="input"
                            type="search"
                            placeholder="Recherche..."
                        />
                        <select name="categorie">
                            <option value="technologie">technologie</option>
                            <option value="vetements">vetements</option>
                        </select>
                        <select name="statut">
                            <option value="1">Actifs</option>
                            <option value="0">Inactifs</option>
                        </select>
                        <button className="button" onClick={() => setIsAdding(true)}>ajouter<i className="fa fa-plus"></i></button>
                    </header>
                    <article className="grid">
                        {products.map((product: Product, key: number) => (
                            <UserProductCart product={product} key={key} />
                        ))}
                    </article>
                    <section>
                        <Pagination />
                    </section>
                </section>

            }
        </div>
    )
}
