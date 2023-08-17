import { Product, Tag } from "../_interface"
import UserProductCart from "../components/userDasboard/UserProductCart"
import Pagination from "../components/Pagination"
import { useState, useEffect, useRef } from "react"
import axiosURL from "../axiosConfig"
import { AxiosResponse, AxiosError } from "axios"
import { RootState } from "../app/store"
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import SkeletonProductCard from "../components/SkeletonProductCard"

export default function UserProducts() {
    const [description, setDescription] = useState('');
    const [isLoading, setLoading] = useState<boolean>(true)
    const [isLoadAdding, setIsLoadAdding] = useState<boolean>(false)

    const label = useRef<null | HTMLLabelElement>(null)

    const [file, setFile] = useState<string | undefined>();

    function handleUploadImage(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;
        setProduct({ ...product, image: file.name });
        setFile(URL.createObjectURL(file));
    }

    const session = useSelector((state: RootState) => state.session)

    const [refresh, setRefresh] = useState<boolean>(false)
    const [isAdding, setIsAdding] = useState<boolean>(false)
    const [products, setProducts] = useState<Product[]>([])
    const [tags, setTags] = useState<Tag[]>([])
    const [product, setProduct] = useState<Product>({
        _id: "",
        name: "",
        description: "",
        price: 0,
        priceAfterDiscount: 0,
        statut: true,
        tag: {
            _id: "",
            name: "",
            _idShop: "",
        },
        image: "",
        _idShop: session.Shop._id,
    })

    useEffect(() => {
        setLoading(true)
        axiosURL.get(`/products/all/${session.Shop._id}`)
            .then(({ data }: AxiosResponse) => {
                if (data.type === "success") {
                    const products = data.data as Product[]
                    setProducts(products)
                }
                setLoading(false)
            }).catch((err: AxiosError) => {
                console.log(err);
                setLoading(true)
            })
    }, [session, isAdding, refresh])

    useEffect(() => {
        axiosURL.get(`/tags/${session.Shop._id}`)
            .then(({ data }: AxiosResponse) => {
                if (data.type === "success") {
                    setTags(data.data);
                }
            }).catch((err: AxiosError) => {
                console.log(err);
            })
    }, [refresh, session])


    const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formdata: FormData = new FormData(e.currentTarget);

        if (!product.image) {
            toast("Importez une image pour votre produit.", {
                type: "error",
            });
            return;
        }

        setIsLoadAdding(true);

        formdata.append("name", product.name)
        formdata.append("description", description)
        formdata.append("price", `${product.price}`)
        formdata.append("priceAfterDiscount", `${product.priceAfterDiscount}`)
        formdata.append("statut", `${product.statut}`)
        formdata.append("tag", product.tag._id)
        formdata.append("_idShop", product._idShop)
        formdata.append("image", product.image)

        axiosURL.post(`/products`, formdata)
            .then(({ data }: AxiosResponse) => {
                setIsLoadAdding(false)
                toast(data.message, {
                    type: data.type,
                });
                if (data.type === "success") {
                    setIsAdding(false)
                    setFile(undefined)
                    setDescription('')
                    setProduct({
                        _id: "",
                        name: "",
                        description: "",
                        price: 0,
                        priceAfterDiscount: 0,
                        statut: true,
                        tag: {
                            _id: "",
                            name: "",
                            _idShop: "",
                        },
                        image: "",
                        _idShop: session.Shop._id,
                    })
                }

            }).catch((err: AxiosError) => {
                console.log(err)
                setIsLoadAdding(false)
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
                                placeholder="Entrer le Titre de votre produit"
                                value={product.name}
                                onChange={(e) => {
                                    setProduct({ ...product, name: e.target.value });
                                }}
                            />
                            <label>Description</label>
                            <ReactQuill
                                theme="snow"
                                value={description}
                                onChange={setDescription}
                            />
                        </div>

                        <div className="input_group multimedia">
                            <span>Média</span>
                            <div className="box_image">
                                <label ref={label} htmlFor="product-image">
                                    <span>{product.image ? <mark>{product.image}</mark> : <>
                                        Ajouter une image a votre produit
                                        <span className="file_accept">
                                            <em>.jpg,</em>
                                            <em>.png,</em>
                                            <em>.jpeg,</em>
                                            <em>.webp</em>
                                        </span>
                                        <button
                                            type="button"
                                            className="button"
                                            onClick={() => {
                                                if (label) label.current?.click()
                                            }}
                                        >
                                            Choisir une image
                                            <i className="fa fa-image"></i>
                                        </button>
                                    </>}</span>
                                </label>
                                <div style={{ backgroundImage: `url(${file})` }}>
                                    {!file && <i className="fa fa-image"></i>}
                                </div>
                                <i
                                    className="fa fa-close"
                                    onClick={() => {
                                        setProduct({ ...product, image: "" })
                                        setFile("")
                                    }}
                                ></i>
                            </div>
                            <input
                                hidden
                                id="product-image"
                                type="file"
                                name="file"
                                onChange={handleUploadImage}
                                accept=".jpg, .png, .jpeg, .webp"
                            />
                        </div>


                        <div className="input_group price">
                            <label>Prix</label>
                            <label>Prix avant réduction <em>(0ptionel)</em> </label>
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
                            <div className="col">
                                <label>statut</label>
                                <select
                                    onChange={(e) => {
                                        setProduct({ ...product, statut: !!e.target.value });
                                    }}
                                >
                                    <option value="1">Actifs</option>
                                    <option value="">Inactifs</option>
                                </select>
                            </div>
                            <div className="col">
                                <label>Categorie</label>
                                <select
                                    onChange={(e) => {
                                        setProduct({ ...product, tag: { _id: e.target.value, name: "", _idShop: "" } });
                                    }}
                                >
                                    <option value="any">Non catégorisé</option>
                                    {tags.map((tag: Tag, key: number) =>
                                        <option key={key} value={tag._id}>{tag.name}</option>
                                    )}
                                </select>
                            </div>

                            <div className="buttons">
                                <button
                                    type="submit"
                                    style={{ marginRight: 20 }}
                                    className={isLoadAdding ? 'button loading' : 'button'}
                                >
                                    Ajouter
                                    {isLoadAdding ? <i className="fa fa-spinner fa-pulse fa-loader"></i> : <i className="fa fa-check"></i>}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsAdding(false)}
                                    style={{ borderColor: "var(--danger)" }}
                                    className="button-outline"
                                >
                                    Annuler
                                    <i style={{ color: 'var(--danger)' }} className="fa fa-close"></i>
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
                            <option value="any">Non catégorisé</option>
                            {tags.map((tag: Tag, key: number) =>
                                <option key={key} value={tag._id}>{tag.name}</option>
                            )}
                        </select>
                        <select name="statut">
                            <option value="1">Actifs</option>
                            <option value="0">Inactifs</option>
                        </select>
                        <button className="button" onClick={() => setIsAdding(true)}>ajouter<i className="fa fa-plus"></i></button>
                    </header>
                    <article className="grid">
                        {isLoading ?
                            [0, 1, 2, 3, 4, 5].map((key: number) =>
                                <SkeletonProductCard key={key} />
                            )
                            : products.map((product: Product, key: number) => (
                                <UserProductCart
                                    refreshProduct={() => setRefresh(!refresh)}
                                    product={product}
                                    key={key}
                                />
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