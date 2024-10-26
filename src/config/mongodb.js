const mongoose = require('mongoose');

const db = 'store-backend';
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