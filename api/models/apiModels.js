'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DataSchema = new Schema({
	patientId:Number,
	reportedOn:String,
	onSetEstimate:String,
	ageEstimate:Number,
	gender:String,
	city:String,
	district:String,
	state:String,
	status:String,
	notes:String,
	contractedFrom:String
	
});

module.exports = mongoose.model('datas', DataSchema);