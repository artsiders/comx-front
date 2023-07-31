import { Product } from "../_interface"
import UserProductCart from "../components/userDasboard/UserProductCart"
import Pagination from "../components/Pagination"
import { useState, useEffect } from "react"
import axiosURL from "../axiosConfig"
import { AxiosResponse, AxiosError } from "axios"
import { RootState } from "../app/store"
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';

export default function UserProducts() {
    const session = useSelector((state: RootState) => state.session)

    const [refresh, setRefresh] = useState<boolean>(false)
    const [isAdding, setIsAdding] = useState<boolean>(false)
    const [products, setProducts] = useState<Product[]>([])
    const [product, setProduct] = useState<Product>({
        _id: "",
        name: "",
        description: "",
        price: 0,
        priceAfterDiscount: 0,
        statut: true,
        category: "any",
        image: "",
        _idShop: session.Shop._id,
    })


    useEffect(() => {
        axiosURL.get(`/products/${session.Shop._id}`)
            .then(({ data }: AxiosResponse) => {
                if (data.type === "success") {
                    setProducts(data.data)
                }
            }).catch((err: AxiosError) => console.log(err))
    }, [session, isAdding, refresh])


    const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formdata: FormData = new FormData(e.currentTarget);

        if (!product.image) {
            toast("Importez une image pour votre produit.", {
                type: "error",
            });
            return;
        }
        formdata.append("name", product.name)
        formdata.append("description", product.description)
        formdata.append("price", `${product.price}`)
        formdata.append("priceAfterDiscount", `${product.priceAfterDiscount}`)
        formdata.append("statut", `${product.statut}`)
        formdata.append("category", product.category)
        formdata.append("_idShop", product._idShop)
        formdata.append("image", product.image)

        axiosURL.post(`/products`, formdata)
            .then(({ data }: AxiosResponse) => {
                toast(data.message, {
                    type: data.type,
                });
                if (data.type === "success") {
                    setIsAdding(false)
                }

            }).catch((err: AxiosError) => {
                console.log(err)
            })

    }

    return (
        <div className="user_product">
            {isAdding ?
                <section className="add_product_form">
                    <form onSubmit={handelSubmit} encType="multipart/form-data">
                        <div className="input_group">
                            <label htmlFor="productName">Titre</label>
                            <input
                                className="input"
                                type="text"
                                id="productName"
                                placeholder="samsung A1"
                                value={product.name}
                                onChange={(e) => {
                                    setProduct({ ...product, name: e.target.value });
                                }}
                            />
                            <label htmlFor="desciption">Description</label>
                            <textarea
                                className="textarea"
                                value={product.description}
                                onChange={(e) => {
                                    setProduct({ ...product, description: e.target.value });
                                }}
                            ></textarea>
                        </div>


                        <div className="input_group multimedia">
                            <span>Image</span>
                            <label htmlFor="product-image">
                                <span>{product.image ? product.image : "Ajouter une image a votre produit"}</span>
                                <i className="fa fa-image"></i>
                            </label>
                            <input
                                id="product-image"
                                className="input"
                                type="file"
                                name="file"
                                placeholder="10000"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (!file) return;
                                    setProduct({ ...product, image: file.name });
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
                                value={product.price ? product.price : ""}
                                onChange={(e) => {
                                    setProduct({ ...product, price: parseInt(e.target.value) });
                                }}
                            />
                            <input
                                className="input"
                                type="number"
                                placeholder="0"
                                data-devise="FCFA"
                                value={product.priceAfterDiscount ? product.priceAfterDiscount : ""}
                                onChange={(e) => {
                                    setProduct({ ...product, priceAfterDiscount: parseInt(e.target.value) });
                                }}
                            />
                        </div>
                        <div className="input_group autre">
                            <label>statut</label>
                            <select
                                onChange={(e) => {
                                    setProduct({ ...product, statut: !!e.target.value });
                                }}
                            >
                                <option value="1">Actifs</option>
                                <option value="">Inactifs</option>
                            </select>
                            <label>Categorie</label>
                            <select
                                onChange={(e) => {
                                    setProduct({ ...product, category: e.target.value });
                                }}
                            >
                                <option value="any">any</option>
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
                            <option value="technologie">any</option>
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
                            <UserProductCart refreshProduct={() => setRefresh(!refresh)} product={product} key={key} />
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