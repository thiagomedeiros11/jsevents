const express = require('express');
const app = express();
// USING THE VIEW ENGINE HANDLEBARS
const handlebars = require('express-handlebars');
const router = express.Router();
// PATH JOIN FUNCTION TO USE BOOTSTRAP LIBRAY
const path = require('path');
require("./models/events");
const mongoose = require("mongoose");
const Events = mongoose.model("events");

// MONGOOSE
mongoose.connect("mongodb://127.0.0.1/events").then(() => {
	console.log("Connected to MongoDB.");
	}).catch((err) => {
		console.log("Error connecting to MongoDB."+err);
	})


// OLD BODY-PARSER 
app.use(express.json());


// PUBLIC DIRECTORY TO USE BOOTSTRAP LIBRARY
app.use(express.static(path.join(__dirname,"public")));

//HANDLEBARS
app.engine('handlebars', handlebars.engine({defaulyLayout:'main'}));
app.set('view engine', 'handlebars');


// LISTENING TO EVENTS FROM NUVEM FONE
app.post('/events', (request, response) => {
	response.send(request.body); // ECHO THE RESULT BACK TO CLIENT
	const resposta = (request.body);
	console.log(resposta)
	const eventos = (resposta);
	new Events(eventos).save();


});


// VIEW PAGE
app.get('/', (request, res) => {
	Events.find().sort({_id: 'desc'}).limit(5).then((eventos) => {
		res.render("admin/home", {eventos: eventos.map(eventos => eventos.toJSON())})
		})
});


//WEB SERVER
app.listen(3333, '10.9.14.44');
console.log("Server is running on http://10.9.14.44:3333")

module.exports = router;
