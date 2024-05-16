import { RiDeleteBinFill } from "react-icons/ri";
import React from 'react'
import './Cartpage.css'

const Cartpage = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const getCartItems = async () => {
            const response = await axios.get('http://localhost:3000/api/v1/getusercart',{
                withCridentials: true
            })
            setProducts(response.data.products)
        }
        getCartItems()
    },[])

    if (!products.length) {
        return(
            <div style={{padding:"20px"}}>
                <h1>Cart Page</h1>
                <h2>Your Cart is Empty</h2>
                <Link to="/">Continue Shopping</Link>
            </div>
        )
    }

    const makePayment = async () => {
        const stripe = await loadStripe
        ("pk_test_51PFqaTSBzWj3FwJrZZ5C7uu8hQPg7BPVjQSXPoCODeBu6ihcHs0WYrdbhjH6S8fenvHjtAif3nFc0FgUZo2IKgRt00ZGoJ70Yl")

        const body = {
            products
        }

        const headers = {
            "Context-Type": "application/json"
        }
        const response = await fetch("htto://localhost:3000/api/v1/payment/create-payment",{
            method:"POST",
            headers: headers,
            credentials: "inciude",
            body: JSON.stringify(body)
        });


        const session = await response.json();

        const result = stripe.redirectToCheckOut({
            sessionId: session.id
        });

        if(result.error) {
            console.log(result.error)
        }
    }

    const deleteFromCart = async (productId) => {
        const response = await axios.delete(`http://localhost:3000/api/v1/delete/${productId}`,{
            whitCredentials: true
        })
        if (response.data.message === 'Removed from cart') {
            setProducts(products.filter((product)=> product. product._id !== productId))
        }
    }
    //setProducts is a function used to update the list of products displayed on thepage
//Inside setProducts, there's a filter method being called on the products array. This method goes through each product in the array and checks a condition. //product.product: This inner product object is nested within the outer product item. This kind of nesting might occur if your data structure is designed to encapsulate additional details or related data within a single item.


    return (
        <div style={{ padding: "20px" }}>
            <h1>Cart Page</h1>

            {product.map((product) => (
                <div key={product.product_id} style={{ marginBottom: "10px" }}>
                    <h2>{product.product.productName}</h2>
                    <p><img src={product.product.img} alt="img" /></p>
                    <p>price:₹{product.product.price}</p>
                    <p>Discount:{product.product.discount}</p>

                    <button style={{ display: "flex", alignItems: "center" }} onClick={() => deleteFromCart(product.product_id)}>
                        <RiDeleteBinFill size={20} style={{ marginRight: "5px" }}
                        />Delete </button>
                </div>
            ))}
            <button className="payment-btn" onClick={makePayment}>Checkout</button>
        </div>
    );
};

export default Cartpage;