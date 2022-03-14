const express = require('express')
const { addHouseController,  } = require('../controllers/houseController')

const router = express.Router()

router.post('/add', addHouseController)

router.get('/houses', )

module.exports = router

