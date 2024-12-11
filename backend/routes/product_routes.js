/*
    product_routes.js

    This file will hold all the product route functions, include get, post, put, and delete
*/
import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product_controller.js";

const router = express.Router();

//CREATE ROUTE -- get method
router.get("/", getProducts);

//create route --post method
router.post("/", createProduct);

//create route -- put method(update method)
router.put("/:id", updateProduct);

//create delete method
router.delete("/:id", deleteProduct);


export default router;