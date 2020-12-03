var connection = require("../config/connection.js");

var orm = {
	selectAll: function (tableInput, cb) {
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [tableInput], function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	insertOne: function (tableInput, colInput, values, cb) {
		var queryString = "INSERT INTO ?? (??) VALUES (?)";
		connection.query(
			queryString,
			[tableInput, colInput, values],
			function (err, result) {
				if (err) {
					throw err;
				}
				cb(result);
			}
		);
	},
	updateOne: function (tableInput, colToUpdate, valToUpdate, id, cb) {
		var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
		connection.query(
			queryString,
			[tableInput, colToUpdate, valToUpdate, id],
			function (err, result) {
				if (err) {
					throw err;
				}
				cb(result);
			}
		);
	},
	deleteOne: function (tableInput, colInput, valToDelete, cb) {
		var queryString = "DELETE FROM ?? WHERE ?? = ?";
		connection.query(
			queryString,
			[tableInput, colInput, valToDelete],
			(err, result) => {
				if (err) {
					throw err;
				}
				cb(result);
			}
		);
	},
};

module.exports = orm;
