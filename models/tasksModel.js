const mongoose = require('mongoose');

const Tasks = mongoose.Schema({
	title: String,
	details: String,
	status: Boolean,
	date: {
		type: Date,
		default: Date.now()
	},
	tags: [String]
})

const TaskModel = mongoose.model('tasks', Tasks, 'tasks');

module.exports = TaskModel