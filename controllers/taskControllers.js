const express = require('express')
const router = express.Router()

const Task = require('../models/tasksModel')

// GET all Tasks
router.get('/', (req, res, next) => {
	Task.find({})
		.then((tasks) => res.json(tasks))
		.catch(next)
})

//GET a Task by id
router.get('/:id', (req, res, next) => {
	Task.findById({ _id: req.params.id })
		.then((task) => res.json(task))
		.catch(next)
})

//POST creates a Task
router.post('/', (req, res, next) => {
	Task.create(req.body)
		.then((task) => res.json(task))
		.catch(next)
})

//PUT updates a Task
router.put('/:id', (req, res, next) => {
	Task.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then((task) => res.json(task))
		.catch(next)
})

//DELETE
router.delete('/:id', (req, res, next) => {
	Task.findByIdAndDelete(req.params.id).then((task) => res.json(task).catch(next))
})

module.exports = router