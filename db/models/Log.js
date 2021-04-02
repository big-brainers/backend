const mongoose = require('../connection');
const Schema = mongoose.Schema;

const LogSchema = new Schema({
	title: String,
	content: String,
	author: String,
	date: {
		type: Date,
		default: Date.now(),
	},
});

const Log = mongoose.model('Log', LogSchema);

module.exports = Log;
