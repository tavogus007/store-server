'use strict';
const product = require('./product.schema');
async function save(data){
    return await product.create(data);
}

async function get(){
    return await product.findAll();
}

async function getById(id){
    return await product.findByPk(id);
}

async function put(id, data){
    const [updated] = await product.update(data, {
        where : {id}
    });
    if (updated){
        return await getById(id);
    }
    return false;
    //const response = await user.replaceOne({_id: id}, data);
    //return getById(id);
}

async function remove(id){
    const deleted = await product.destroy({
        where : {id}
    });
    if (deleted){
        return true;
    }
    return false;
}

module.exports = {
    save,
    get,
    getById,
    put,
    remove
}