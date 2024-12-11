/*
    product_controller.js

    This file will house all the controller for the product route functions
*/
import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    } catch (error) {
        console.log("Error in fetching products: ", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
};

export const createProduct = async (req,res) => {
    const product = req.body; //user will send this data

    //check requirements of the product model
    if(!product.name || !product.price || !product.image)
    {
        return res.status(400).json({ success: false, message: "Please provide all fields"});
    }

    //check passed, create new product
    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    } catch (error) {
        console.log("Error in Create product: ", error.message);
        res.status(500).json({success:false, message: "Server Error"});
    }
};

export const updateProduct = async (req, res) => {
    const {id} = req.params;

    const product = req.body;

    //update product
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true});
        res.status(200).json({success: true, data: updatedProduct});
    } catch (error) {
        res.status(500).json({success: false, message: "Server error"});
    }
};

export const deleteProduct = async (req,res) => {
    const {id} = req.params;
    
    //check if id is valid
    if(!mongoose.Types.ObjectId.isValid(id))
        {
            return res.status(404).json({success: false, message: "Invalid Product Id"});
        }
        
    //check for :id in database
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted"});
    } catch (error) {
        //id not found
        console.log("error in deleting product:", error.message);
        res.status(500).json({success: false, message: "Server error."});
    }
};