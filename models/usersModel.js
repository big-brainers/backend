const mongoose = require('../db/connection');
const Tasks = require('../models/tasksModel')
const bcrypt = require('bcrypt')

const Users = new mongoose.Schema({
    email: {type:String, required:true, unique:true},
    password: {type:String}, 
    Tasks: [Tasks]
})

Users.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

Users.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next()
    }
    const pass = await bcrypt.genPass(10)
    this.password = await bcrypt.hash(this.password, pass)
})

const UsersModel = mongoose.model('Users', Users)

module.exports = UsersModel