const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const router = express.Router();
const path = require('path');
require("./models/events");
const mongoose = require("mongoose");
const Events = mongoose.model("events");

mongoose.connect("mongodb://127.0.0.1/events").then(() => {
	console.log("Connected to MongoDB.");
	}).catch((err) => {
		console.log("Error connecting to MongoDB."+err);
	})


app.use(express.json());

app.use(express.static(path.join(__dirname,"public")));

app.engine('handlebars', handlebars.engine({defaulyLayout:'main'}));
app.set('view engine', 'handlebars');

app.post('/events', (request, response) => {
	response.send(request.body);
	const resposta = (request.body);
	console.log(resposta)
	const eventos = (resposta);
	new Events(eventos).save();
});

app.get('/', (request, res) => {
	Events.find().sort({_id: 'desc'}).limit(5).then((eventos) => {
		res.render("admin/home", {eventos: eventos.map(eventos => eventos.toJSON())})
		})
});

app.listen(3333, '10.9.14.44');
console.log("Server is running on http://10.9.14.44:3333")

module.exports = router;
