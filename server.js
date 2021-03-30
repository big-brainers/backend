const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//User Controller
const UserController = require('./controllers/userController')
app.use('/user',UserController)

//Task Controller
const TaskControllers = require('./controllers/taskControllers')
app.use('/task',TaskControllers)

dotenv.config();
app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), () => {
	console.log(`PORT: ${app.get('port')}`);
})