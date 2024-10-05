import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

const app = express(); // initialize express app
app.use(cors) // enable cors
app.use(bodyParser.json()); // parse application/json
dotenv.config(); // get environment variables

const PORT = process.env.PORT || 9050; // set port

const connect = mongoose.connect(process.env.DB_URL, {
  user: process.env.DB_USERNAME,
  pass: process.env.DB_PASSWORD,
})

connect.then(() => {
  console.log("Connected to database");
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
}).catch((err) => console.log(err));
