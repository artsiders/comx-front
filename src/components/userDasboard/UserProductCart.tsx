import { Product } from "../../_interface";
import { discoutPercentage, formatPrixFCFA } from "../../_utils";
import axiosURL from "../../axiosConfig";
import { AxiosResponse, AxiosError } from 'axios'
import { toast } from 'react-toastify';

interface Props {
    product: Product;
    refreshProduct: () => void;
}

const UserProductCart: React.FC<Props> = ({ product, refreshProduct }) => {

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const _id = e.currentTarget.dataset.id
        axiosURL.delete(`products/${_id}?filename=${product.image}`)
            .then(({ data }: AxiosResponse) => {
                toast(data.message, {
                    type: data.type,
                })
                if (data.type === "success") {
                    refreshProduct()
                }

            }).catch((err: AxiosError) => {
                toast('Erreur lors de la suppression', {
                    type: "error",
                })
                console.log(err)
            })
    }
    return (
        <div className="user_product_cart" key={product._id}>
            <div className="image">
                <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/uploads/product/${product.image}`} alt={product.name} />
            </div>
            <div className="details">
                <h3 className="name">{product.name}</h3>
                <p className="price">{formatPrixFCFA(product.price)}</p>
                <p className="price">{product.priceAfterDiscount && <s>{formatPrixFCFA(product.priceAfterDiscount)}</s>}</p>
                <p className="percentage">{discoutPercentage(product.price, product.priceAfterDiscount)} %</p>
                <p className="tag">Tag : <b>{product.tag?.name}</b></p>
                {/* <div dangerouslySetInnerHTML={{ __html: product.description }}></div> */}
                <div className="action">
                    <button className="edit"><i className="fa fa-edit"></i></button>
                    <button
                        className="trash"
                        onClick={handleDelete}
                        data-id={product._id}
                    >
                        <i data-id={product._id} className="fa fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default UserProductCart;