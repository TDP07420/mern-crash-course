/*
    db.js

    This file is used to connect to the database using mongoose
*/
import mongoose from 'mongoose';


export const connectDB = async () => {
    try {
        //use mongoose package to connect to database
        const conn = await mongoose.connect(process.env.MONGO_URI);
        //connection success
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);    //process code 1 means exit with failure, 0 success
    }
};