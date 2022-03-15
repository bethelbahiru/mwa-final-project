const { ObjectId } = require('mongodb');
const House = require('../models/houseModel')
const mongoose = require('mongoose')


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
            price: req.body.price,
            ownerName: req.body.ownerName
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


 module.exports.updateHouseController = async (req, res) => {

    const id = new ObjectId(req.body._id)
    console.log(`ID FOUND => ${id}`);
    // const result = await House.updateOne({ _id: id},{
    //     $set: { description: req.body.description,
    //     address:req.body.adress, 
    //     maxGuest: req.body.maxGuest,
    //     bedRoom: req.body.bedRoom,
    //     bathRoom: req.body.bathRoom,
    //     startDate: req.body.startDate,
    //     endDate: req.body.endDate,
    //     offer: req.body.offer,
    //     checkinType: req.body.checkinType,
    //     picture: req.body.picture, 
    //     price: req.body.price}
    //  })
    const house = await House.findById(id)
        house.description= req.body.description;
        house.address = req.body.address; 
        house.ownerName = req.body.ownerName
        house.maxGuest = req.body.maxGuest;
        house.bedRoom = req.body.bedRoom;
        house.bathRoom = req.body.bathRoom;
        house.startDate = new Date();
        house.endDate = new Date();
        house.offer = req.body.offer;
        house.checkinType = req.body.checkinType;
        house.picture = req.body.picture; 
        house.price = req.body.price;

        await house.save();
        res.json({ success: true})
}

module.exports.deleteHouseController = async (req, res, next) => {

    const id = mongoose.Types.ObjectId(req.body._id)
    console.log(`ID of house to be deleted => ${id}`)
    await House.deleteOne({_})

    // House.findOneAndRemove({_id:id}, function (err, data) {

    //     if (!err) {
    //         console.log(`House with id ${id} is deleted`)
    //         res.json({sucess: true})
    //     }
    //     else {
    //         console.log(err);
    //     }
    // })
}

   



