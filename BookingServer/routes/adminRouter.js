const express = require('express')
const { addHouseController, viewAllHouses, deleteHouse } = require('../controllers/houseController')

const router = express.Router()

router.post('/add', addHouseController)

router.get('/houses', viewAllHouses)

//router.delete('/house/:id', deleteHouse)

module.exports = router

