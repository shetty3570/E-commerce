import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const navigate = useNavigate()

    const getSingleProduct = async () => {
        try{
            const response = await axios.get('http://localhost:3000/api/v1/single/${id}')
            setProduct(respnse.data.data)
        }catch (error) {
             console.log(error)
        }
        
    }
    useEffect(()=>{
        getSingleProduct()
    },[id])

    const AddToCart = async ()=>{
        const respnse= await axios.post(`http://localhost:3000/api/v1/addtocart`,{
            productId:id,
            quantity:1
        },{
            withCredential:true
        })
        if (response.status===200){
            navigate('/cart')
        }
    }

  return (
    <div>
        <h1 className='heading-tags'>Product Details</h1>
        <div className="productDetails-container">
            <div>
                <img className='product-details-images' src={product.img} alt="product-images" />
            </div>
            <div>
                <h1 className="names">{product.productName}</h1>
                <h2 className="names">{product.price}</h2>
                <button className="cart" onClick={AddT0Cart} >Add to cart</button>
            </div>
        </div>
      
    </div>
  )
}

export default ProductDetails