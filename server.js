require('dotenv').config();
const express = require('express');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const cors = require('cors');
// const UserController = require('./controllers/userController');
// const TaskControllers = require('./controllers/taskControllers');
const logController = require('./controllers/Log');
const userController = require('./controllers/User');
const app = express();
const port = ('port', process.env.PORT || 8000);
const StartMongoServer = require('./db/connection');

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
// app.get('/', (req, res) => res.send('BOAT!'));
app.get('/', (req, res) => {
	res.redirect('/welcome');
});

app.get('/signup', (req, res) => {
	res.render('/signup');
});

app.get('/signin', (req, res) => {
	res.render('/signin');
});

// app.post('/signup', (req, res, next) => {
// 	User.create({
// 		email: req.body.email,
// 		password: req.body.password,
// 	})
// 		.then((user) => {
// 			res.json(user);
// 			res.render('welcome');
// 		})
// 		.catch(next);
// });

// Logs Controller
app.use('/logs', logController);

// User Controller
app.use('/users', userController);

//User Controller
// app.use('/users', UserController);

//Task Controller
// app.use('/', TaskControllers);

StartMongoServer();

app.listen(port);
