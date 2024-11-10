require("dotenv").config();
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB CONNECTION FAILED!..", err);
  });

// // //  APPROACH:1 TO CONNECT DATABASE
/*
import express from "express";
const app = express()(async () => {
  try {
    await mongoose.connect("${process.env.MONGODB_URL}/${DB_NAME}");
    app.on("error", (error) => {
      console.log("ERR:", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log("App is listening on port ${process.env.PORT}");
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw err0r;
  }
})();
*/
/* const express = require("express");

 require("dotenv").config()
 const {connectionToMongodb}  = require("./config/config")//imported from config


 const PORT = process.env.PORT || 3200
 const app = express();

 connect to mongodb instance
 connectionToMongodb()


 app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`)}
*/
