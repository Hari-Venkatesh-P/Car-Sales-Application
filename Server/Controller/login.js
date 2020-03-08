const login = require('../Models/login')

async function addUser(req, res) {
    try {
            let newUser = new login({
            user_id:req.body.userid,
            password:req.body.password,
            }) 
            await newUser.save()
            res.status(200).send({
                success: true,
                message: 'User Created successfully.'
            })
        }
    catch(error) {
        res.status(500).send(error)
    }
}

async function authenticate(req,res)
{
    try {
        await login.find({password:req.params.password},(findError,findDocuments)=>{
            if(findError)
            {
                res.json({
                    message : "Passwords don't match",
                    success : false,
                })
            }
            else{
                res.status(200).json({
                    success: true,
                    message: "Password Matches"
                })
            }
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

async function authenticateUser(req,res)
{
    try {
        await login.find({user_id:req.params.userid,password:req.params.password},(findError,findDocuments)=>{
            if(findDocuments.length==0)
            {
                res.status(500).json({
                    message : "failed",
                    success : false
                })
            }
            else{
                res.status(200).json({
                    success: true,
                    message:"success"
                }
                )}
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    addUser,
    authenticate,
    authenticateUser
}