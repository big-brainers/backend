const mongoose = require('mongoose')

const mongoURI = `mongodb+srv://admin:1234test@cluster0.nbzrd.mongodb.net/boat-backend?retryWrites=true&w=majority`

const startMongoServer = async () => {
	try {
		await mongoose
			.connect(mongoURI, {
				useUnifiedTopology: true,
				useNewUrlParser: true,
				useFindAndModify: false,
			})
			.then((instance) => {
				console.log(`connected to ${instance.connections[0].name}`)
			})
	} catch (event) {
		console.log(event)
		throw event
	}
}

module.exports = startMongoServer