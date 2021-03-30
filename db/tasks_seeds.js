const mongoose = require('./connection')
const Tasks = require('../models/tasksModel')
const Data = require('./seeds.json')

Tasks.deleteMany({})
	.then(() => Tasks.insertMany(Data))
	.catch(console.error)
	.finally(() => {
	    process.exit
	})