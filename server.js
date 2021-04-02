const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const UserController = require('./controllers/userController');
const TaskControllers = require('./controllers/taskControllers');
const logController = require('./controllers/Log');
const app = express();

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

dotenv.config();

const port = ('port', process.env.PORT || 8000);
const StartMongoServer = require('./db/connection');

StartMongoServer();

app.listen(port);
