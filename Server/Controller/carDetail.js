const Car = require('../Models/Car')


async function getCar(req,res)
{
    try {
        await Car.find({name:req.params.name},(findError,findDocuments)=>{
            if(findError)
            {
                res.json({
                    message : "Unable to find car",
                    success : false,
                })
            }
            else{
                res.status(200).json({
                    success: true,
                    message: findDocuments}
                )}
        })
    } catch (error) {
        res.status(500).send(error)
    }
}
async function addCar(req, res) {
    try {
            let newCar = new Car({
            name:req.body.name,
            manufacturer:req.body.manufacturer,
            description:req.body.description,
            rating:req.body.rating,
            gears:req.body.gears,
            type:req.body.type,
			issold:"n",
			no_of_cars:req.body.no_of_cars,
            }) 
            await newCar.save()
            res.status(200).send({
                success: true,
                message: 'Car Created Successfully'
            })
        }
    catch(error) {
        res.status(500).send(error)
    }
}
async function getAllCars(req,res){

    try {
        await Car.find({ no_of_cars: { $gte: 1 } }, (findError, findDocuments) => {
        if (findError) {
            res.json({
                success: false,
                message: 'Unable to fetch details'
            })
        } else {
            res.status(200).json({
                success: true,
                message: findDocuments
            })
        }
    })  
    } catch (error) {
        res.status(500).send(error)
    } 
}

async function getAllCarsGarage(req,res){

    try {
        await Car.find({ no_of_cars: { $lt: 1 } }, (findError, findDocuments) => {
        if (findError) {
            res.json({
                success: false,
                message: 'Unable to fetch details'
            })
        } else {
            res.status(200).json({
                success: true,
                message: findDocuments
            })
        }
    })  
    } catch (error) {
        res.status(500).send(error)
    } 
}

async function deleteCar(req,res)
{
    try {
        await Car.remove({name: req.body.name}, (removeError, removeDocs) => {
            if (removeError) {
                res.json({
                    success: false,
                    message: 'Error in Deletion'
                })
            } else {
                res.status(200).json({
                    success: true,
                    message: 'Car Deleted'
                })
            }
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

async function updateCar (req,res)
{
    try {
        Car.update({ 
            name: req.body.name 
        }, { 
            $set: { 
                description: req.body.description,
            } 
        }, (updateError, updateMessage) => {
        if (updateError) {
            res.json({
                success: false,
                message: 'Error in Updating'
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Description Updated!'
            })
        }
    })
    } catch (error) {
        res.status(500).send(error)
    }
}
async function buyCar(req,res)
{
		try{
			Car.update(
			{
				_id : req.body.id
			},
			{	 
				$inc: { no_of_cars: -1} 
			},(updateError, updateMessage) => {
        if (updateError) {
            res.json({
                success: false,
                message: 'Error in Buying'
            })
        } else {
			checkIssold()
            res.status(200).json({
                success: true,
                message: 'CAR BOUGHT!'
            })
        }
    })
    } catch (error) {
        res.status(500).send(error)
    }
}

async function checkIssold()
{
	try{
		await Cars.aggregate(
   [
      {
         $project:
           {
             _id: 1,
             issold:
               {
                 $cond: { if: { $lt: [ "$no_of_cars", 1 ] }, then: "y", else: "n" }
               }
           }
      }
   ]
)	
	}
	catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    addCar,
    getAllCars,
    deleteCar,
    updateCar,
    getCar,
	getAllCarsGarage,
	buyCar
}