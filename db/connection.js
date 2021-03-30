const mongoose = require('mongoose')

mongoose.Promise = Promise

mongoose.connect('mongodb://localhost/user', { useNewUrlParser: true })
.then((con) => {
	console.log(`connected to mongodb on ${con.connections[0].name} db`)
})
.catch(err => {
	console.error(err)
})

module.exports = mongoose