const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Book = sequelize.define(
    "Book", {
        bookCode: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        tittle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        release_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        numberOfpages: {
            type: DataTypes.INTEGER
        },
        categoryId: {
            type: DataTypes.INTEGER
        }
    }
)
Book.associate = function(models) {
    Book.belongsTo(models.Category, {
        foreignKey: 'categoryId'
    })
}

module.exports = Book