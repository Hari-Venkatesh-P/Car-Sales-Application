const router = require('express').Router()
const userCarController = require('../Controller/userCarDetail')


router.post('/addUserCar',userCarController.addUserCar)
router.get('/getAllSoldCar',userCarController.getAllSoldCar)

module.exports = router;