/*
    product_model.js

    Holds the schema and product model for product for create in database
*/
import mongoose from "mongoose";

//create product schema
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
}, {
    timestamps: true    //adds createdAt, updatedAt
});

//create product model
const Product = mongoose.model('Product', productSchema);

export default Product;