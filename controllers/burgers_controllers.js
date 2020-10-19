const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");
const path = require("path");

router.get("/", function(req, res) {
    burger.all(function(data) {
        const hbsObject = {
            burgers: data
        };
        console.log("hbsObject is: ", hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(results) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.get("/assets/css/style.css", (req, res)=> {
    res.sendFile(path.join(__dirname, "../public/assets/css/style.css"))
});

router.get("/assets/js/index.js", (req, res)=> {
    res.sendFile(path.join(__dirname, "../public/assets/js/index.js"))
});

router.get("/assets/img/burger.png", (req, res)=> {
    res.sendFile(path.join(__dirname, "../public/assets/img/burger.png"))
});

module.exports = router;