const mongoose = require('mongoose');
require('dotenv').config();

const db = process.env.DB_NAME;
const ref = 'mongodb://localhost:27017/';

async function connect() {
    await
    mongoose.connect(ref + db, {
       
    });

    console.log('Database MongoDB listenign connected ...');
}
module.exports = {
    connect
}