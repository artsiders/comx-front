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
                        <label htmlFor="productName">Nom Produit</label>
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
                        <label htmlFor="email">price</label>
                        <input
                            className="input"
                            type="number"
                            placeholder="10000"
                            value={''}
                            onChange={(e) => {
                                console.log(e);
                            }}
                        />
                        <label htmlFor="email">lien</label>
                        <input
                            className="input"
                            type="text"
                            placeholder="https://"
                            value={''}
                            onChange={(e) => {
                                console.log(e);
                            }}
                        />
                        <label htmlFor="image">image</label>
                        <input
                            className="input"
                            type="file"
                            placeholder="10000"
                            value={''}
                            onChange={(e) => {
                                console.log(e);
                            }}
                        />
                        <label htmlFor="desciption">Description</label>
                        <textarea className="textarea"></textarea>
                        <button type="submit" style={{ display: "inline", marginRight: 20 }} className="button">Ajouter</button>
                        <button type="button" onClick={() => setIsAdding(false)} style={{ display: "inline", backgroundColor: "var(--danger)" }} className="button">Annuler</button>
                    </form>
                </section> : <section className="section">
                    <header>
                        <input
                            className="input" type="search" placeholder="Recherche..." />
                        <select name="categorie">
                            <option value="technologie">technologie</option>
                            <option value="vetements">vetements</option>
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
