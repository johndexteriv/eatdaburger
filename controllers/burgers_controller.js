var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
	burger.selectAll(function (data) {
		res.render("index", { burgers: data });
	});
});

router.post("/api/burgers", function (req, res) {
	burger.insertOne(["burger_name"], [req.body.name], function (result) {
		res.json({ id: result.insertID });
	});
});

router.put("/api/burgers/:id", function (req, res) {
	burger.updateOne(["devoured"], [1], [req.params.id], function (result) {
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

router.delete("/api/burgers/:id", function (req, res) {
	burger.deleteOne(["id"], [req.params.id], function (result) {
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;
