const express = require('express')
const router = express.Router()

const Task = require('../models/tasksModel')
const User = require('../models/usersModel')

// GET all Tasks
router.get('/tasks', (req, res, next) => {
	Task.find({})
		.then((tasks) => res.json(tasks))
		.catch(next)
})

// GET all users Tasks
router.get('/Users/:userId/tasks', (req, res, next) => {
	User.findById({ _id: req.params.userId })
		.then((user) => res.json(user.tasks))
		.catch(next)
})

//GET a Task by id
router.get('/tasks/:id', (req, res, next) => {
	Task.findById({ _id: req.params.id })
		.then((task) => res.json(task))
		.catch(next)
})

//POST creates a Task
router.post('/Users/:userId/tasks/create', (req, res, next) => {
	Task.create(req.body)
		.then((newTask) => {
			User.findOneAndUpdate(
				req.params.userId,
				{ $push: {tasks: newTask} },
				{ new: true }
			)
			.then(add => res.json(add))
		})
		.catch(next)
})

//PUT updates a Task
router.put('/tasks/:id', (req, res, next) => {
	Task.findOneAndUpdate(
			{ _id: req.params.id }, 
			req.body, 
			{ new: true }
		)
		.then((task) => res.json(task))
		.catch(next)
})

//DELETE
router.delete('/tasks/:id', (req, res, next) => {
	Task.findByIdAndDelete(req.params.id)
		.then((task) => res.json(task)
		.catch(next))
})

module.exports = router