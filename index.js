const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dbmongoo = require('./src/config/mongodb');
const path = require('path');

const sequelize = require('./src/config/mysqldb');
sequelize.sync();

dbmongoo.connect();

const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/photos',express.static(path.join(__dirname, 'photos'))) //se expone las fotos en esta forma, forma estatica


require('./src/routes')(app);

app.listen(port, () => {
  console.log('server listening on port ' + port);
  console.log(`server running on port: ${port}`);
})
