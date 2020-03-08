const mongoose = require('mongoose');

const userCarSchema = mongoose.Schema({
    user_id:String,
    car_id:String,
})
const UserCar = module.exports = mongoose.model('UserCar', userCarSchema);