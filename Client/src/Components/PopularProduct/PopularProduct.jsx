import { useEffect, useState } from "react"
import ProductCard from "../ProductCard/ProductCard"
import './PopularProduct.css'
import axios from'axios'


const PopluarProducts = () => {
    const [products, setProducts] = useState([])

    const getAllProduct = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/all')
            console.log(response.data.data)
            setProducts(response.data.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllProduct()
    }, [])
    return (
        <div>
            <h1 className="heading-tags">Popular Products</h1>
            <div className="popularproducts">
                {products.map((product) => {
                        return(
                <ProductCard productid={product.id} name={product.productName} img={product.img} price={product.price} key={product._id} />
                )
                    })}
            
            </div>
        </div>
    )
}

export default PopluarProducts