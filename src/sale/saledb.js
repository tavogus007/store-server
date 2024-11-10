'use strict';
const sale = require('./sale.schema');
async function save(data){
    return await sale.create(data);
}

async function get(){
    return await sale.findAll();
}

async function getById(id){
    return await sale.findByPk(id);
}

async function put(id, data){
    const [updated] = await sale.update(data, {
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
    const deleted = await sale.destroy({
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