const mongoose = required ("mongoose")


const cartSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            quantity: {
                type: Number,
                default: 1
            },

        },
    ],
});

const Cart = mongoose.model("Cart", cartSchema);
module.export = Cart;