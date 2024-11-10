'use strict';

const {DataTypes} = require('sequelize');
const sequelize = require("../config/mysqldb");

const client = sequelize.define('client', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    nit: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = client;