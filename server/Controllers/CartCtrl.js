const Product = require("../modules/product")
const Cart = require('../modules/cart')


const addtoCart = async (req, res) => {
    const { productId, quantity } =req.body;
    console.log(productId)
    try {
        //check if product exists or not
        const product = await product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found"});
        }

        //check if cart exists for user
        const cart = await Cart.findOne({ user: req.userId });
        if (!cart) {
            //Create new cart
            const newCart = await Cart.create({
                user: req.userId,
                products: [{ product: productId, quantity }],
            });
            return res.status(201).json (newCart);

        }
        //Cart exists, update it


        //findIndex is array method in js.
        // finding the index (or position) of a specific product in the product array of a cart.

        //p as a placeholder for "curent product being checked"
        //p.product.toString(): converts the product's identifier from a type that might not be a regular (like an ObjectId in MongoDb) into a standard string .

        //=== productId : This 

        const index = cart.product.findIndex(
            (p) => p.product.toString() === productId
        );
        if ( index > -1) {
            cart.products[index].quantity +=quantity;

        } else {
            // new add to cart
            cart.products.push({ product: productId, quantity });
        }

        await cart.save();
        res.json({ message: 'product added to cart'})
    }catch(error) {
        console.error(error);
        res.status(500).json({message : "Server error"})
    }
}

const getUserCart = async (req, res) => {
    //populate is used to get nested doc/data
    const cart = await Cart.findOne ({ user: req.userId }).populate(
        "products.product"
    );
    // console.log (cart.products)
    res.json(cart);
}






const deleteFromcart = async (req, res ) => {
    const { productId } = req.params;

    try{
        //find cart
        const cart = await Cart.findOne ({ user: req.userId });

        // find product indewx cart 
        const index =cart.products.findIndex(
            (p)=>p.product.toString()===productId
        );
        console.log(index)

//if product not in cart,throw error
     if (index ===  -1){
         return res.status(404).json({message:'product not in cart'})
     
         }
     
         cart.product.splice(index, 1);
         await cart.save();
     
         res.json({ message: 'Removed from cart'});
     } catch (error){
        console.error(error);
        res.status(500).json({ message: "Server error"});
     }
}

module.exports = {
    addtoCart,
    getUserCart,
    deleteFromcart

}
