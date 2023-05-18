const Category = require('../model/Category')

class CategoryController {
    async getAllCategory(req, res, next) {
        try {
            const listCategorys = Category.findAll({
                order: [
                    ['id', 'ASC']
                ]
            })
            res.status(200).json({
                status: "Success",
                data: listCategorys
            })
        } catch (error) {
            next(error)
        }
    }
    async createNewCategory(req, res, next) {
        try {
            const CategoryName = req.body.name
            const existCategory = await Category.findOne({ where: { name: CategoryName } })
            if (existCategory) {
                res.status(401).json({
                    status: "fail",
                    message: "Category name is exist"
                })
            }
            const newCategory = await Category.create({
                name: CategoryName
            })
            res.status(201).json({
                status: "Success"
            })
        } catch (error) {
            next(error)
        }
    }
}
module.exports = new CategoryController