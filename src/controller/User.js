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
}
module.exports = new UserController