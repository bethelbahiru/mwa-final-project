const express = require('express')
const { addHouseController, viewHouse } = require('../controllers/houseController')

const router = express.Router()

router.post('/add', addHouseController)

module.exports = router

