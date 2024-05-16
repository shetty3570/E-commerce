const mongoose = require("mongoose")

const PaymentDetailSchema = new mongoose.Schema({
    paymentId: String,
    amount : Number,
    cuurency :  String,
    status:String,
    method: String,
    receipt_emial:String,
    description: String,
    customer:{
        type : mongoose.Schema.Types.ObjectId,ref:'User'
    },
    //reference to ur user model if u have one 
    created:{
        type :Date,
        default:Date.now
    }
});
const paymentDetail = mongoose.model('PaymentDetail',PaymentDetailSchema)
module.exports = paymentDetail