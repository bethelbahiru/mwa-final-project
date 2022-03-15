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
            price: req.body.price,
            ownerName: req.body.
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
        //console.log(`chek 2`);
     //res.json({ sucess: true, data: result})

   


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

