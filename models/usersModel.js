const mongoose = require('mongoose');
const Tasks = require('../models/tasksModel').schema

const Users = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    userRole: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    tasks: []
})

const UsersModel = mongoose.model('user', Users)

module.exports = UsersModel