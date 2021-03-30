const mongoose = require('../db/connection')

const Tasks = new mongoose.Schema({
	title: String,
	details: String,
    // status: String,
	// date: Number,
	// tags: [String]
})

const TaskModel = mongoose.model('Tasks', Tasks);

module.exports = TaskModel