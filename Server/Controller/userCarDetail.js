const UserCar = require('../Models/UserCar')

async function addUserCar(req, res) {
    try {
            let newUserCar = new UserCar({
            user_id:"user",
            car_id:req.body.car_id,
            }) 
            await newUserCar.save()
            res.status(200).send({
                success: true,
                message: 'Car Bought Successfully By User'
            })
        }
    catch(error) {
        res.status(500).send(error)
    }
}
async function getAllSoldCar(req,res)
{
    try {
        await UserCar.find({},(findError,findDocuments)=>{
            if(findError)
            {
                res.json({
                    message : "Unable to find user cars",
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



module.exports = {
addUserCar,
getAllSoldCar
}