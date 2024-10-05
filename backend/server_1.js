import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // get environment variables

import {
  app,
  mongoDBConnectSuccess,
  mongoDBConnectError,
  mongoDBConnectData,
} from "./src/utils/server.utils.js";

const PORT = process.env.PORT || 9050; // set port

import user from "./src/model.js";
import express from "express";

const router = express.Router();
app.use('/', router)

router.route('/insertdata').post((req, res) => {
  console.log(req.body);
  user.insertMany([...req.body]).then(() => {
    console.log('Data inserted');
  }).catch((err) => {
    console.log(err);
  })
  res.status(200).send({ message: "Data inserted" })
})

router.route('/fetchdata').get((req, res) => {
  user.find().then(data => {
    console.log(data);
    res.json(data)
  }).catch((err) => {
    console.log(err);
    res.json(err)
  })
})


app.post('/post', (req, res) => {
  console.log(req.body);
  res.status(200).send({ message: "Data inserted" })
})


mongoose.connect(process.env.DB_URL, mongoDBConnectData)
  .then(mongoDBConnectSuccess(PORT))
  .catch(mongoDBConnectError);
