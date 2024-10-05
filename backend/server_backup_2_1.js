import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // get environment variables

import {
  mongoDBConnectSuccess,
  mongoDBConnectError,
  mongoDBConnectData,
} from "./src/utils/server.utils.js";

const PORT = process.env.PORT || 9050; // set port

mongoose.connect(process.env.DB_URL, mongoDBConnectData)
  .then(mongoDBConnectSuccess(PORT))
  .catch(mongoDBConnectError);