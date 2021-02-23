const { DataTypes } = require('sequelize');

const sequelize = require('../db/config');
const Temperature = require('./temperature');
const User = require('./user');

const Patient = sequelize.define('patient', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
});

module.exports = Patient;
