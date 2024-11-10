import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB CONNECTION FAILED", error);
    process.exit(1);
  }
};

export default connectDB;

// const mongoose = require("mongoose");
//  require("dotenv").config();

// //
// const MONGODB_URL = process.env.MONGODB_URL// our connection string from mongoDb atlas

// //writing a function for our connection
// function connectionToMongodb() {
//     mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}')

//     mongoose.connection.on("connected", () => {
//         console.log("mongodb connection successful ")
//     });

//     mongoose.connection.on("error", (err) => {
//         console.log(err)
//         console.log("mongodb connection unsuccessful")
//     });

// }
// module.exports = {connectionToMongodb} ;//exporting our function
