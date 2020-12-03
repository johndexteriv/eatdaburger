var connection = require("../config/connection.js");

var orm = {
	selectAll: (tableInput, cb) => {
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [tableInput], (err, result) => {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	insertOne: (tableInput, colInput, values, cb) => {
		var queryString = "INSERT INTO ?? (??) VALUES (?)";
		connection.query(
			queryString,
			[tableInput, colInput, values],
			(err, result) => {
				if (err) {
					throw err;
				}
				cb(result);
			}
		);
	},
	updateOne: (tableInput, colToUpdate, valToUpdate, id, cb) => {
		var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
		connection.query(
			queryString,
			[tableInput, colToUpdate, valToUpdate, id],
			(err, result) => {
				if (err) {
					throw err;
				}
				cb(result);
			}
		);
	},
	deleteOne: (tableInput, colInput, valToDelete, cb) => {
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
