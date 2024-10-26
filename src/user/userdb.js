'use strict';

const mongoose = require('mongoose');
const schema = require('./user.schema');
const document  = 'user';

let user = mongoose.model(document,schema.userSchema);

async function save(data){
    return await user.create(data);
}

async function get(){
    return await user.find();
}

async function getById(id){
    return await user.findById(id);
}

module.exports = {
    save,
    get,
    getById
}