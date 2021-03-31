const mongoose = require('../db/connection');
const Tasks = require('../models/tasksModel').schema
const bcrypt = require('bcrypt')

const Users = new mongoose.Schema({
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true,}, 
    tasks: [Tasks]
})

Users.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

Users.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const UsersModel = mongoose.model('Users', Users)

module.exports = UsersModel