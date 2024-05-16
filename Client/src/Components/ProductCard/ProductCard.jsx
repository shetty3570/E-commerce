import {Link} from 'react-router-dom'
import './ProductCard.css'



const ProductCard =({productid, name, price, img}) => {
    return(
        < Link to={`/product/${productid}`} className="productCard">
            <div>
                <img className="prdct-img" src={img}  alt="product" />
            </div>
            <div>
                <h1>{name}</h1>
                <h3>₹{price}</h3>
            </div>
            <div>ADD to cart </div>
        </Link>
    )
}
export default ProductCard
