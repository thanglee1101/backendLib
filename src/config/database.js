const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('qlthuvien', 'root', '01052001th', {
    host: 'localhost',
    dialect: 'mysql'
});

const checkconnection = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

checkconnection()
module.exports = sequelize