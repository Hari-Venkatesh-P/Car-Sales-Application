const express = require('express')
const app = express()
const cors = require('cors')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:4200' }));

const PORT = 3000

const URL = 'mongodb://127.0.0.1:27017/car_db';
mongoose.connect(URL, {useNewUrlParser : true},(err) => {
    if (err) {
    	console.log(err)
        console.log('Error while Connecting!')
    } else {
        console.log('Connected to Mongo DB')
    }
})

const carRoute = require('./Routes/carRoute');
app.use('/car', carRoute);

const userCarRoute = require('./Routes/userCarRoute');
app.use('/usercar', userCarRoute);

const loginRoute = require('./Routes/loginRoute');
app.use('/login', loginRoute);

app.listen(PORT, () => {
    console.log('Server Started on PORT ' + PORT)
})
