const mongoose = require('mongoose')


const houseSchema = new mongoose.Schema({
    description: {type: String},
    address: {type: String},                //can be unique
    maxGuests: {type: String},
    bedRooms: {type: Number},
    bathRooms: {type: Number},
    startDate: {type: Date},
    Date: {type: Date},
    offer: {type: Array},
    checkinType: {type: String},
    picture: {type: String}
})

module.exports = mongoose.model('House', houseSchema)