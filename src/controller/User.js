const User = require("../model/User")

class UserController {
    async login(req, res, next) {
        try {
            const { email, password } = req.body
            if (!email) {
                res.status(400).json({
                    status: "fail",
                    message: "email is required"
                })
            }
            if (!password) {
                res.status(400).json({
                    status: "fail",
                    message: "password is required"
                })
            }
            const user = await User.findOne({ where: { email: email } })
            if (!user) {
                res.status(400).json({
                    status: "fail",
                    message: "user not found"
                })
            }
            if (password !== user.password) {
                res.status(400).json({
                    status: "fail",
                    message: "password is wrong"
                })
            }
            res.status(200).json({
                status: "Success",
                message: user
            })
        } catch (error) {
            next(error)
        }
    }
    async register(req,res,nex){
        try {
            const{name,email,password,dob}=req.body
            if(!name){
                req.status(400).json({
                    status:"fail",
                    message:"name is required"
                })
            }
            if(!email){
                req.status(400).json({
                    status:"fail",
                    message:"email is required"
                })
            }
            if(!password){
                req.status(400).json({
                    status:"fail",
                    message:"password is required"
                })
            }
            const existUser=await User.findOne({where:{email:email}})
            if(existUser){
                res.status(400).json({
                    status:"fail",
                    message:"User is exist"
                })
            }
            const newUser=await User.create({
                name:name,
                email:email,
                password:password,
                dob:dob
            })
            if(!newUser){
                req.status(400).json({
                    status:"fail",
                })
            }
            rereq.status(400).json({
                status:"Success",
            })
        } catch (error) {
            
        }
    }
}
module.exports = new UserController