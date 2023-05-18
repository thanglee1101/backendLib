const sequelize = require('../config/database')
const { DataTypes } = require('sequelize')

const User = sequelize.define(
    "User", {
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
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        dob: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    }
)
module.exports = User