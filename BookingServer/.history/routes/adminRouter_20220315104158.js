const express = require('express')

const { addHouseController, viewAllHouses, updateHouseController, deleteHouseController } = require('../controllers/houseController')


const router = express.Router()

router.post('/add', addHouseController)
router.put('/update', updateHouseController)
router.delete('/delete', deleteHouseController)

router.get('/houses', viewAllHouses)

//router.delete('/house/:id', deleteHouse)

module.exports = router

