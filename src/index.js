const express = require("express");
const path = require("path");

const ejs = require("ejs");

const app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "public/css")));

app.use(express.static(path.resolve(__dirname, "public/scripts")));
app.use(express.static(path.resolve(__dirname, "public/imgoptimizadas")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/services", (req, res) => {
  res.render("services");
});
app.get("/contacts", (req, res) => {
  res.render("contacts");
});
app.get("/certifications", (req, res) => {
  res.render("certifications");
});
app.listen(process.env.PORT || 3000);

/* app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.use(express.static(path.join(__dirname, "public/css")));

app.listen(3000);
 */
