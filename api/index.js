const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('../config');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const user = require('./components/user/network');
app.use('/api/user',user)

app.listen(config.api.port, () => 
console.log('ok',config.api.port)
);