const path = require("path");
const express = require("express");
let rutasMain = require("./routes/main");
const app = express();
app.set("view engine", "ejs");
app.set("views", __dirname, "../src/views");

app.use(express.static(path.resolve(__dirname,"../public")));

app.listen(process.env.PORT || 3000, () => console.log("servidor corriendo en puerto 3000"));

app.use("/", rutasMain)