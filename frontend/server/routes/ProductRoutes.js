import  express  from 'express'
import asyncHandler from 'express-async-handler'
import protect from '../AuthMiddleware/AuthMiddleware.js'
import Product from '../models/ProductModel.js'

const productsRoute = express.Router()

//all product
productsRoute.get("/",asyncHandler(
    async(req, res) =>{
        const products = await Product.find({})
        res.json(products)
    }
))

//single product
productsRoute.get("/:id",asyncHandler(
    async(req, res) =>{
        const product = await Product.findById(req.params.id)
        if(product){
            res.json(product)
        }else{
            res.status(400)
            throw new Error("product not found")
        }
    }
))

//product review
productsRoute.post("/:id/review",protect,asyncHandler(
    async(req, res) =>{
        const {rating, comment} = req.body
        const product = await Product.findById(req.params.id)
        if(product){
            const alreadyReviewed = product.reviews.find((r) => r.user.toString() === req.user._id.toString())
            if(alreadyReviewed){
                res.status(400)
                throw new Error("Product already Reviewed")
            }
            const review = {
                name: req.user.name,
                rating: Number(rating),
                comment,
                user: req.user.id
            }

            product.reviews.push(review)
            product.numReviews = product.reviews.length
            product.rating = 
                product.reviews.reduce((acc, item) => item.rating + acc, 0) /
                product.reviews.length
            
                await product.save()
            res.status(201).json({message: "Reviewed Added"})
        }else{
            res.status(400)
            throw new Error("product not found")
        }
    }
))

export default productsRoute