'use strict';

const db = require('./userdb');


function save (user){
    return db.save(user);
}

function getAll (){
    return db.get();
}

function getById(id){
    return db.getById(id);
}

module.exports = {
    save,
    getAll,
    getById
}