const { ObjectId } = require('mongodb');
const House = require('../models/houseModel')


module.exports.addHouseController = async(req, res, next) => {
    try{
        let house = new House({
            description: req.body.description,
            address: req.body.address, 
            maxGuest: req.body.maxGuest,
            bedRoom: req.body.bedRoom,
            bathRoom: req.body.bathRoom,
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
        const houses = await House.find({}).exec();
        res.json(houses)
    } catch (error) {
        res.json({err: error})
    }
}

// module.exports.deleteHouse = async(req, res, next) => {
//     const id = new ObjectId(req.params.id)
//     console.log("To be deleted ID - " + id)
//     try {
//             const houseToDelete = await House.findByIdAndRemove({_id:id}, function(err, data){
//                 if(!err){
//                     console.log(`House with id ${id} is deleted`)
//                     res.json({msg : 'House is deleted', data: houseToDelete})
//                 }
//             })
//     }
//     catch(error) {
//         res.json({err: err})
//     }
// }
