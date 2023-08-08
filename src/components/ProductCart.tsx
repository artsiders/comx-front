import { Product } from "../_interface";
import { discoutPercentage, formatPrixFCFA } from "../_utils";

interface Props {
    product: Product;
}

const ProductCart: React.FC<Props> = ({ product }) => {
    return (
        <div className="product-card" key={product._id}>
            <div className="image">
                <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/uploads/product/${product.image}`} alt={product.name} />
            </div>
            <div className="details">
                <h3 className="name">{product.name}</h3>
                <p className="description" dangerouslySetInnerHTML={{ __html: product.description }}></p>
                <p className="price">{formatPrixFCFA(product.price)}
                    {product.priceAfterDiscount && <s>{formatPrixFCFA(product.priceAfterDiscount)}</s>}</p>
                <p className="percentage">{discoutPercentage(product.price, product.priceAfterDiscount)} %</p>
                <button className="button">
                    Commander
                    <i className='fa fa-cart-plus'></i>
                </button>
            </div>
        </div>
    )
}


export default ProductCart;