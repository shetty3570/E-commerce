const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const CreatePayment = async (req, res) =>{
    const { products } =req.body;
    const lineItem = products.map((product)=>{
        console.log(product.product)
        return{
            price_data:{
                currency: "inr",
                product_data:{
                    name:product.product.productName,
                },
                unit_amount:product.product.price *100,
            },
             quantity:product.quantity,
        }
    }) 
    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItem,
        mode:"payment",
        success_url:"http://localhost:3000/success",
        cancel_url:"http://localhost:3000/cancel",
    });

    console.log(session)
    res.json({id:session.id})
}
module.exports = {
    CreatePayment
}