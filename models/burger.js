var orm = require("../config/orm.js");

var burger = {
	selectAll: (cb) => {
		orm.selectAll("burgers", (res) => cb(res));
	},

	insertOne: (colInput, values, cb) => {
		orm.insertOne("burgers", colInput, values, (res) => cb(res));
	},

	updateOne: (colToUpdate, valToUpdate, id, cb) => {
		orm.updateOne("burgers", colToUpdate, valToUpdate, id, (res) => cb(res));
	},

	deleteOne: (colInput, id, cb) => {
		orm.deleteOne("burgers", colInput, id, (res) => cb(res));
	},
};

module.exports = burger;
