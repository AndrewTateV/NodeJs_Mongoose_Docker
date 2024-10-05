import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";


export const app = express(); // initialize express app
app.use(cors()) // enable cors
app.use(bodyParser.json()); // parse application/json
dotenv.config(); // get environment variables

export const mongoDBConnectSuccess = (PORT) => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
}

export const mongoDBConnectError = (err) => console.log(`${err} mongo connection error`)

export const mongoDBConnectData = {
  user: process.env.DB_USERNAME,
  pass: process.env.DB_PASSWORD,
}