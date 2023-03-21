const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const http=require("http");
const colors = require("colors");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./router/auth");
const conversationRoute=require("./router/conversation")
const messageRoute = require("./router/message")
const BasedDoctor = require("./router/GetDoctor");
const Medicine = require("./router/Medicine");
dotenv.config();

const DB =
  "mongodb://127.0.0.1:27017/padoc";
mongoose.set("strictQuery", true);
mongoose.connect(DB, { useNewUrlParser: true });




//middleware
app.use(express.json()); 
app.use(helmet());
app.use(morgan("common"));
app.use("/", userRoute);
app.use("/patient/chat", conversationRoute);
app.use("/patient/messages", messageRoute);
app.use("/BasedDoctor", BasedDoctor);
app.use("/reciept", Medicine);

app.listen(6000, () => {
  console.log(`port is working at 6000`.blue.bold);
});

