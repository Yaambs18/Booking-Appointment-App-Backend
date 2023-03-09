const Sequelize = require('sequelize');

const sequelize = new Sequelize('booking-appointment-db', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;