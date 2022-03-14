const express = require("express");
const router = express.Router();
const path = require("path");


router.get("/", (req, res) => res.render(path.resolve(__dirname, "../views/home.ejs")));

router.get("/register", (req, res) => res.render(path.resolve(__dirname, "../views/register")));
router.get("/login", (req, res) => res.render(path.resolve(__dirname, "../views/login")));

router.post("/login", (req, res) => res.render(path.resolve(__dirname, "../views/login")));
router.post("/", (req, res) => res.render(path.resolve(__dirname, "../views/home")));


module.exports = router;