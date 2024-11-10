'use strict';
const client = require('./client.schema');
async function save(data){
    return await client.create(data);
}

async function get(){
    return await client.findAll();
}

async function getById(id){
    return await client.findByPk(id);
}

async function put(id, data){
    const [updated] = await client.update(data, {
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
    const deleted = await client.destroy({
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