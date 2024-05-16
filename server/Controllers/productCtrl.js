const product = require("../Models/product")

//create  product
const CreateProduct = async (req, res) => {
    try{
        //frist we have to check  whether there is product or not in the data base
        const checkProduct = await product.findOne({productName: req.body.productName})
        if(checkProduct){
            //401 = we are telling that there is an error
            //503 = node.js(server) gives error
            //200 = all ok
            //404 = page not found
            return res.status(401).json ({ errorMessage: 'product already exist'})
        }
        //if product dosen't exist in database we create the product
        const addProduct = await product.create({
            procuctName:req.body.procuctName,
            price: req.body.price,
            discount: req.body.discount,
            outOfStock: req.body.outOfStock,
            img: req.body.img
        })
  res.status(200).json({message: 'Product Created' })
    }
catch(error){
    res.status(503).json({errorMessage : 'Something went Worng'})
}
}
//get all the products
const getAllProducts = async(req,res) => {
    try{
        const getall = await product.find({})
        res.status(200).json({message:'Success',data:getall})
    } 
    catch (error){
        res.status(503).json({errorMessage:'Something went Worng'})
    }
}
const singleProduct =async(req,res) =>{
    try{
        const single =await product.findById({_id:req.params.id})
        res.status(200).json({message:'Success',data:single})
    }
    catch(error){
        res.status(503).json({errorMessage:'Something went Worng'})
    }
}
module.exports ={
    CreateProduct,
    getAllProducts,
    singleProduct
}