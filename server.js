require('dotenv').config();
const express = require('express');
// var GoogleStrategy = require('passport-google-oauth20').Strategy;
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

// passport.use(
// 	new GoogleStrategy(
// 		{
// 			clientID: GOOGLE_CLIENT_ID,
// 			clientSecret: GOOGLE_CLIENT_SECRET,
// 			callbackURL: 'http://www.example.com/auth/google/callback',
// 		},
// 		function (accessToken, refreshToken, profile, cb) {
// 			User.findOrCreate({ googleId: profile.id }, function (err, user) {
// 				return cb(err, user);
// 			});
// 		}
// 	)
// );

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
