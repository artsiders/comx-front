import { useNavigate } from "react-router-dom";
import { Product } from "../../_interface";
import { discoutPercentage, formatPrixFCFA } from "../../_utils";

interface Props {
    product: Product;
    refreshProduct?: () => void;
}

const UserProductCart: React.FC<Props> = ({ product }) => {
    // unused element {description,statut,_idShop}
    const { _id, name, price, priceAfterDiscount, tag, image } = product

    const navigate = useNavigate()

    const showDetail = () => {
        navigate(`/my-shop/custom/product/${_id}`)
    }
    return (
        <div
            className="user_product_cart animated fadeIn"
            onClick={showDetail}
        >
            <div className="image">
                <img
                    loading="lazy"
                    src={`${import.meta.env.VITE_REACT_APP_API_URL}/uploads/product/${image}`}
                    alt={name}
                />
            </div>
            <div className="details">
                <h3 className="name">{name}</h3>
                <p className="price">{formatPrixFCFA(price)}</p>
                {(priceAfterDiscount !== 0) && <div className="discount_box">
                    <p className="discount">
                        {priceAfterDiscount && <s>{formatPrixFCFA(priceAfterDiscount)}</s>}
                    </p>
                    <p className="percentage">
                        <b>{discoutPercentage(price, priceAfterDiscount)} %</b>
                    </p>
                </div>
                }
                {(tag?.name) && <p className="tag">Tag : <mark>{tag?.name || "Non catégorisé"}</mark></p>}
                {/* <div dangerouslySetInnerHTML={{ __html: description }}></div> */}
                {/* <div className="action">
                    <button className="edit"><i className="fa fa-edit"></i></button>
                    <button
                        className="trash"
                        onClick={handleDelete}
                        data-id={_id}
                    >
                        <i data-id={_id} className="fa fa-trash"></i>
                    </button>
                </div> */}
            </div>
        </div>
    )
}


export default UserProductCart;