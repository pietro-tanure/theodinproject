const express = require('express')
const path = require("node:path");
const assetsPath = path.join(__dirname, "7_public");

const app = express()

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "7_views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", { message: "EJS rocks!", links });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// http://localhost:3000/