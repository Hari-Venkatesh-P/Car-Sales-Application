const router = require('express').Router()
const carController = require('../Controller/carDetail')

router.post('/addCar',carController.addCar)
router.get('/getAllCars',carController.getAllCars)
router.delete('/deleteCar',carController.deleteCar)
router.put('/updateCar',carController.updateCar)
router.get('/getCar/:name',carController.getCar)
router.put('/buyCar',carController.buyCar)
router.get('/getAllCarsGarage',carController.getAllCarsGarage)

module.exports = router;


