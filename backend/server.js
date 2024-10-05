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

mongoose
  .connect(process.env.DB_URL, mongoDBConnectData)
  .then(mongoDBConnectSuccess(PORT))
  .catch(mongoDBConnectError);


  import user from "./src/model.js";  // 从 model.js 文件中导入 user 模型
  import express from "express";      // 导入 express 框架
  

  const router = express.Router()
  app.use('/',router)

  router.route('/insertdata').post((req, res) => {
    console.log(req.body);  // 打印客户端发送的数据
    user.insertMany(req.body)  // 直接插入请求体中的数据
      .then(() => {
        console.log('data inserted');
        res.status(200).send({ message: 'Data inserted successfully' });  // 插入成功后发送响应
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send('Error inserting data');  // 插入失败时返回错误
      });
  });
  

  router.route('/fetchdata').get((req, res) => {
    // 处理获取数据的逻辑
user.find().then(data=>{console.log(data)
res.json(data)

}).catch((err)=>{
  console.log(err)
  res.json(err)
})
  })