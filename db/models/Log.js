const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
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
