const mongoose = require('mongoose');
const loginSchema = mongoose.Schema({
    user_id:String,
    password:String,
})

const login = module.exports = mongoose.model('credentials', loginSchema);