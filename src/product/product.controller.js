'use strict';
const Product = require('./product.schema');
const model = require('./product.model');


async function save(req, res){
    req.body.image = await `photos/${req.file.filename}`
    const productSaved = await model.save(req.body);
    return res.status(200).json(productSaved);
}

//MIN 20
async function get(req,res){
    const product = await model.getAll();
    return res.status(200).json(product);
}

async function getById(req,res){
    const productFound = await model.getById(req.params.id);
    return res.status(200).json(productFound);
}

async function update(req, res){
    const product = await model.put(req.params.id, req.body);
    return res.status(200).json(product);
}

async function remove(req, res){
    const product = await model.remove(req.params.id);
    return res.status(200).json(model);
}

module.exports = {
    save,
    get,
    getById,
    update,
    remove
}