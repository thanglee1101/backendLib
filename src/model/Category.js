const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Category = sequelize.define(
    "Category", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATEONLY
        },
        updatedAt: {
            type: DataTypes.DATEONLY
        }

    }
)
Category.associate = function(models) {
    Category.hasMany(models.Book, {
        foreignKey: { name: 'categoryId' }
    })
}
module.exports = Category