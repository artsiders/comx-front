import { Product } from "../_interface";

interface Props {
    product: Product;
}

const ProductCart: React.FC<Props> = ({ product }) => {
    return (
        <div className="product-card" key={product._id}>
            <div className="product-image">
                <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/uploads/product/${product.image}`} alt={product.name} />
            </div>
            <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price}</p>
                <button className="product-button">
                    <i className='fa fa-cart-plus'></i>
                    Commander
                </button>
            </div>
        </div>
    )
}


export default ProductCart;