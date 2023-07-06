import { Product } from "../_interface"
import UserProductCart from "../components/userDasboard/UserProductCart"
import Pagination from "../components/Pagination"

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
    return (
        <div className="user_product">
            <section className="section">
                <header>
                    <input type="search" placeholder="Recherche..." />
                    <select name="categorie">
                        <option value="technologie">technologie</option>
                        <option value="vetements">vetements</option>
                    </select>
                    <button className="button">ajouter<i className="fa fa-plus"></i></button>
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
        </div>
    )
}
