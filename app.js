const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const path = require("node:path");
const expressLayouts = require("express-ejs-layouts");

const Router = require("./routes/router");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layout");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
console.log("Static files served from:", path.join(__dirname, "public"));

app.use("/", Router);

app.use((req, res) => {
  res.status(404).render("404", { title: "Page Not Found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Express app listening on port ${PORT}!`);
});
