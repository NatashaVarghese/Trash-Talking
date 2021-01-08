const express = require('express');
const router = express.Router();
const bin_controllers = require('../controllers/bins.js');

//Bin routes
router.post('/', bin_controllers.registerBin);
router.post('/:bin_id', bin_controllers.binUpdate);

module.exports = router;