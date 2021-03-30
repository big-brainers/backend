const mongoose = require('mongoose');

// const dbuser = 'boat-backend'
// const password = 'GlI3KD3vXU03zTFB'
const dbuser = 'admin';
const password = '1234test';

// const mongoURI = `mongodb+srv://${dbuser}:${password}@cluster0.4u8fy.mongodb.net/boat-backend?retryWrites=true&w=majority`;
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
