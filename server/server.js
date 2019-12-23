import express from "express";
import bodyParser from "body-parser";
import cors from "cors"

import "./connection/connection.js";
// import productRouter from "./routers/productRouter.js"
// import categoriesRouter from "./routers/categoriesRouter.js"
import userRouter from "./routers/userRouter.js"
import roomsRouter from "./routers/roomsRouter.js"
import paymentRouter from "./routers/paymentRouter.js"

const server = express();

server.use(cors());
server.use(bodyParser.text());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(userRouter);
server.use(roomsRouter);
server.use(paymentRouter);
// server.use(productRouter);
// server.use(categoriesRouter);


const PORT = 5000;

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
