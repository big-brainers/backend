const mongoose = require('mongoose');

const dbuser = 'admin';
const password = '1234test';

const mongoURI = `mongodb+srv://admin:1234test@cluster0.nbzrd.mongodb.net/boat-backend?retryWrites=true&w=majority`;

mongoose
	.connect(mongoURI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useFindAndModify: true,
	})
	.then((instance) => {
		console.log(`connected to ${instance.connections[0].name}`);
	})
	.catch(console.error);

module.exports = mongoose;
