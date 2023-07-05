import { Product } from "../../_interface";

interface Props {
    product: Product;
}

const UserProductCart: React.FC<Props> = ({ product }) => {
    return (
        <div className="user_product_cart" key={product._id}>
            <div className="image">
                <img src={`/images/${product.image}`} alt={product.name} />
            </div>
            <div className="details">
                <h3 className="name">{product.name}</h3>
                <p className="price">${product.price}</p>
                <div className="action">
                    <button className="edit"><i className="fa fa-edit"></i></button>
                    <button className="trash"><i className="fa fa-trash"></i></button>
                </div>
            </div>
        </div>
    )
}


export default UserProductCart;