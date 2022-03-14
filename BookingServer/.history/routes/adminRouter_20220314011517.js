const express = require('express')
const { addHouseController, viewAllHouse } = require('../controllers/houseController')

const router = express.Router()

router.post('/add', addHouseController)

router.get('/houses', )

module.exports = router

