const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Events = new Schema({
	type: {
		type: String,
		required: false
	},
	call_id: {
		type: String,
		required: false
	},
	code: {
		type: String,
		required: false
	},
	direction: {
		type: String,
		required: false
	},
	our_number: {
		type: String,
		required: false
	},
	their_number: {
		type: String,
		required: false
	},
	their_number_type: {
		type: String,
		required: false
	},
	timestamp: {
		type: String,
		required: false
	},
	url: {
		type: String,
		required: false
	},
	date: {
		type: Date,
		default: Date.now()
	}
})

mongoose.model("events", Events)
