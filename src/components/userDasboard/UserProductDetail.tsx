import { useEffect, useState } from "react";
import { Product } from "../../_interface";
import { discoutPercentage, formatPrixFCFA } from "../../_utils";
import axiosURL from "../../axiosConfig";
import { AxiosResponse, AxiosError } from 'axios'
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useParams } from "react-router-dom";
import SubTopBar from "./SubTopBar";
import SkeletonUserProductDetail from "./SkeletonUserProductDetail";


const UserProductDetail = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const { _idProduct } = useParams()

    const session = useSelector((state: RootState) => state.session)
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
    const { _id, name, price, priceAfterDiscount, tag, image, description, statut } = product

    useEffect(() => {
        setIsLoading(true)
        const params = {
            _idShop: session.Shop._id
        }
        axiosURL.get(`/products/${_idProduct}`, { params })
            .then(({ data }: AxiosResponse) => {
                if (data.type === "success") {
                    const product = data.data as Product
                    setProduct(product)
                }
                setIsLoading(false)
            }).catch((err: AxiosError) => {
                console.log(err)
                setIsLoading(false)
            })
    }, [session, _idProduct])

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const _id = e.currentTarget.dataset.id
        axiosURL.delete(`products/${_id}?filename=${image}`)
            .then(({ data }: AxiosResponse) => {
                toast(data.message, {
                    type: data.type,
                })
                if (data.type === "success") {
                    // refreshProduct()
                }
            }).catch((err: AxiosError) => {
                toast('Erreur lors de la suppression', {
                    type: "error",
                })
                console.log(err)
            })
    }

    return (
        <>
            <SubTopBar currentPage="detail produit" />
            {isLoading ? <SkeletonUserProductDetail /> :
                <>
                    <section className="user_product_detail animated fadeIn" key={_id}>
                        <div className="image">
                            <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/uploads/product/${image}`} alt={name} />
                            <i className="fa fa-edit"></i>
                        </div>
                        <div className="details">
                            <p className="name">{name}</p>
                            <p className="price"><b>Prix : </b>{formatPrixFCFA(price)}</p>
                            {(priceAfterDiscount !== 0) && <div className="discount_box">
                                <p className="discount">
                                    <b>Réduction : </b>{priceAfterDiscount && <s>{formatPrixFCFA(priceAfterDiscount)}</s>}
                                </p>
                                <p className="percentage">
                                    <b>{discoutPercentage(price, priceAfterDiscount)} %</b>
                                </p>
                            </div>
                            }
                            {(tag?.name) && <p className="tag">
                                <b>Tag : </b><mark>{tag?.name || "Non catégorisé"}</mark>
                            </p>}
                            <p>
                                <b>Statut : </b>{(statut) ? <span className="badge badge-success">Actif</span> : <span className="badge badge-danger">Inactif</span>}
                            </p>
                            <p className="description">
                                <b>Description:</b>
                                <span dangerouslySetInnerHTML={{ __html: description }}></span>
                            </p>
                            <div className="action">
                                <button className="edit">Modifier <i className="fa fa-edit"></i></button>
                                <button
                                    className="trash"
                                    onClick={handleDelete}
                                    data-id={_id}
                                >
                                    Supprimer
                                    <i data-id={_id} className="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
    )
}


export default UserProductDetail;