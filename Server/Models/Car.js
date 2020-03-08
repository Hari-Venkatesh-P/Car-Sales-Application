const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    name:String,
    manufacturer:String,
    description:String,
    type:String,
    gears:Number,
	rating:Number,
	issold:String,
	no_of_cars:Number,
})
const Car = module.exports = mongoose.model('Car', carSchema);

