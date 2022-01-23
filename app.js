const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.resolve("./public")));

app.listen(3000, () => console.log("servidor corriendo en puerto 3000"));

app.get("/", (req, res) => res.sendFile(path.resolve("./views/home.html")));
