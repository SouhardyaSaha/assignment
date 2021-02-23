const { DataTypes } = require('sequelize');

const sequelize = require('../db/config');
const Patient = require('./patient');

const Temperature = sequelize.define('temperature', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    temp: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
});

module.exports = Temperature;
