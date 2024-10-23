'use strict';

const express = require('express');
const router = express.Router();
const userController = require('../user/user.controller');

router.get('/', userController.get);


module.exports = router;