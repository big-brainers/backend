require('dotenv').config();
const express = require('express');

const cors = require('cors');
const UserController = require('./controllers/userController');
const TaskControllers = require('./controllers/taskControllers');
const logController = require('./controllers/Log');
const app = express();

console.log(process.env.PASSWORD_TEAM);
console.log(process.env.URI);

app.use(cors());
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

//Main route
app.get('/', (req, res) => res.send('BOAT!'));

// Logs Controller
app.use('/logs', logController);

//User Controller
app.use('/users', UserController);

//Task Controller
app.use('/', TaskControllers);

const port = ('port', process.env.PORT || 8000);
const StartMongoServer = require('./db/connection');

StartMongoServer();

app.listen(port);
