const mongoose = require('./connection')
const Users = require('../models/usersModel')
const TestData = require('./test_user.json')

Users.deleteMany({})
	.then(() => Users.insertMany(TestData))
	.catch(console.error)
	.finally(() => {
		process.exit
	})