var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", (req, res) => {
	burger.selectAll((data) => {
		res.render("index", { burgers: data });
	});
});

router.post("/api/burgers", (req, res) => {
	burger.insertOne(["burger_name"], [req.body.name], (result) => {
		res.json({ id: result.insertID });
	});
});

router.put("/api/burgers/:id", (req, res) => {
	burger.updateOne(["devoured"], [1], [req.params.id], (result) => {
		result.changedRows == 0 ? res.status(404).end : res.status(200).end();
	});
});

router.delete("/api/burgers/:id", (req, res) => {
	burger.deleteOne(["id"], [req.params.id], (result) => {
		result.affectedRows == 0 ? res.status(404).end : res.status(200).end();
	});
});

module.exports = router;
