const express = require("express");
const app=express();
const cookieParser = require("cookie-parser");
const about = require("../routes/about");
const create = require("../routes/create");
const user = require("../routes/user");
const home = require("../routes/index");
const cookiedata=require("../routes/cookies");
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use((req, resp, next) => {
  console.log("new request made..");
  console.log("host :" + req.hostname);
  console.log("path :" + req.path);
  console.log("method :" + req.method);
  next();
});

// static directory Example
const staticPath=path.join(__dirname,'../public');
console.log(staticPath);
app.use(express.static(staticPath));


app.use("/", home);
app.use("/about", about);
app.use("create", create);
app.use("/user", user);
app.use("/cookie",cookiedata);

app.use((req, resp, next) => {
  console.log("Inside Next Middleware");
  next();
});


app.set("view engine", "ejs");
app.use((req, res) => {
  res.status(404).render("404", { title: "Tech Blog | 404 Error" });
});

app.listen(4000, () => {
  console.log("Listening the port :4000");
});
