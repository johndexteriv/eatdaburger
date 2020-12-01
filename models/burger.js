var orm = require("../config/orm.js");

var burger = {
	selectAll: function (cb) {
		orm.selectAll("burgers", function (res) {
			cb(res);
		});
	},
	insertOne: function (colInput, values, cb) {
		orm.insertOne("burgers", colInput, values, function (res) {
			cb(res);
		});
	},
	updateOne: function (colToUpdate, valToUpdate, id, cb) {
		orm.updateOne("burgers", colToUpdate, valToUpdate, id, function (res) {
			cb(res);
		});
	},
};

module.exports = burger;
