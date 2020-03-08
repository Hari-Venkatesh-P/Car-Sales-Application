const router = require('express').Router()
const loginController = require('../Controller/login')

router.post('/addUser',loginController.addUser)
router.get('/authenticateUser/:userid/:password',loginController.authenticateUser)

module.exports = router