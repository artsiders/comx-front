import { Product } from "../_interface"
import UserProductCart from "../components/userDasboard/UserProductCart"

export default function UserProducts() {
    const products: Product[] = [
        {
            _id: 1,
            name: "sac à dos",
            price: 100000,
            image: "sac-a-dos.jpg",
        },
        {
            _id: 2,
            name: "sac à dos",
            price: 100000,
            image: "sac-a-dos.jpg",
        },
        {
            _id: 3,
            name: "sac à dos",
            price: 100000,
            image: "sac-a-dos.jpg",
        },
    ]
    return (
        <div className="user_product">
            <section className="product-section">
                <header>
                    <input type="search" placeholder="Recherche..." />
                    <select name="categorie">
                        <option value="technologie">technologie</option>
                        <option value="vetements">vetements</option>
                    </select>
                    <button className="button">ajouter un produit <i className="fa fa-plus"></i></button>
                </header>
                <div className="product-grid">
                    {products.map((product: Product, key: number) => (
                        <UserProductCart product={product} key={key} />
                    ))}
                </div>
            </section>
        </div>
    )
}
