/*
    server.js

    this will be the entry point of our API within the application
*/

//import express to create an express app
import express from 'express';
import dotenv from "dotenv";
import path from "path";
import { connectDB } from './config/db.js';

import productRoutes from "./routes/product_routes.js";

//access .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

//product config
app.use(express.json());    //allows us to accetp JSON data in the req.body

//use product routes (get,post,put,delete)
app.use("/api/products", productRoutes);

//check for environment
if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    //render out the application
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    })
}

//app listener
app.listen(PORT, () => {
    //call to connectDB as soon as we listen to application
    connectDB();
    console.log('Server started at http://localhost:' + PORT);
});

