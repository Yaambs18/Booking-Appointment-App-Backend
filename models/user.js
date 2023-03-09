const Sequelizer = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
    id: {
        type: Sequelizer.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelizer.STRING,
        allowNull: false
    },
    email: {
        type: Sequelizer.STRING,
        allowNull: false
    }
});

module.exports = User;