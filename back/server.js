const express =require("express");
const morgan = require("morgan");
const DATABASE =require("./database/database");
const bodyParser = require('body-parser')

const app=express();
const cors = require('cors')
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

require("dotenv").config();
app.use(morgan("dev"));
DATABASE();
app.use(cors());
app.use(express.json());

app.use(express.json());
app.use('/uploads',express.static('uploads'))
app.use("/user",require("./routes/route"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", " ,content-type");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  
  next();
  console.log(error)
});
PORT=3000
app.listen(PORT,(err)=>
err ? console.log(err) :console.log(`server is running on ${PORT}`)
);

