'use strict';

const userdb = require('./userdb');

function save(){

}
function get(req,res){
    return res.status(200).json(userdb);
}
function update(){

}
function remove(){

}

module.exports = {
    save,get,update,remove
}