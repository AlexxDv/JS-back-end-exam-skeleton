const express = require("express");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");

const routes = require("./routers");

const app = express();

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);

app.set("view engine", "hbs");

app.use("/static", express.static("public")); // описваме от къде да вземе статичните файлове
app.use(express.urlencoded({ extended: false }));
app.use(routes);

//TODO: change DB name after /
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/crypto");

app.listen(5000, () => console.log("<<--Server listening on port 5000-->"));
