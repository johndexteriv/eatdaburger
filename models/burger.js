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

	deleteOne: (colInput, valToDelete, cb) => {
		orm.deleteOne("burgers", colInput, valToDelete, (res) => {
			cb(res);
		});
	},
};

module.exports = burger;
