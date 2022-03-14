const express = require('express')
const { addHouseController, viewHouse } = require('../controllers/houseController')

const router = express.Router()

router.post('/add', addHouseController)

router.get('/gethouse')

module.exports = router

