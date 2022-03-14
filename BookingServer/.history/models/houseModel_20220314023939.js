const mongoose = require('mongoose')


const houseSchema = new mongoose.Schema({
    description: {type: String},
    address: {type: String},                //can be unique
    maxGuests: {type: String},
    bedRooms: {type: Number},
    bathRoom: {type: Number},
    startDate: {type: Date},
    endDate: {type: Date},
    offer: {type: Array},
    checkinType: {type: String},
    picture: {type: String},
    price: {type: String}
})

module.exports = mongoose.model('House', houseSchema)