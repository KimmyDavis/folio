require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT;
mongoose
  .connect(process.env.DB_STRING)
  .then(() => {
    app.listen(port, () => {
      console.log(`Connected to database and running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});
