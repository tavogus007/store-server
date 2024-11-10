'use strict';

const {DataTypes} = require('sequelize');
const sequelize = require("../config/mysqldb");
const product = require('../product/product.schema');
const client = require('../client/client.schema');

const sale = sequelize.define('Sale', {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    idUser: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

sale.belongsTo(product, {foreignKey: "userId"});
sale.belongsTo(client, {foreignKey: "productId"});

module.exports = sale;