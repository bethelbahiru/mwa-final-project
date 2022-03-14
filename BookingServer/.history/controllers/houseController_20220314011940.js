const House = require('../models/houseModel')


module.exports.addHouseController = async(req, res, next) => {
    try{
        let house = new House({
            description: req.body.description,
            address: req.body.address, 
            maxGuests: req.body.maxGuests,
            bedRooms: req.body.bedRooms,
            bathRooms: req.body.bathRooms,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            offer: req.body.offer,
            checkinType: req.body.checkinType,
            picture: req.body.picture,
            price: req.body.price
        })

        const createdHouse = await house.save();
        res.json({success: true, message : 'A new house is added', data : createdHouse})
    } catch(error) {
        res.json({err: error})
    }
}

module.exports.viewAllHouses = async(req, res, next) => {
    try {
        const houses = await House.find({}).e();
        res.json({
            success : true,
            data : houses
        })
    } catch (error) {
        res.json({err: error})
    }
}
