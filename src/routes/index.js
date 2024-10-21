'use strict';
const user = require('./user');
const client = require('./client');
const product = require('./product');
const sales = require('./sales');

function routes(app) {
    app.use('/api/user',user);
    app.use('/api/client',client);
    app.use('/api/product',product);
    app.use('/api/sales',sales);
    /*

    app.get('/', function (req, res) {
        res.send('Welcome to dev code Academy course of October 2024')
    })
    app.get('/api/client', function (req, res) {
        res.send('Hello client')
    })

    app.get('/api/product', function (req, res) {
        res.send('Hello user')
    })

    app.get('/api/sale', function (req, res) {
        res.send('Hello saler')
    })
*/
}

module.exports = routes;