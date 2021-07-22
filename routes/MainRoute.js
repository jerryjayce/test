
const express = require("express");
const router = express.Router();

const MainController = require('../controllers/VmAllocator');
router.get('/calculate_vm', MainController.calculate_no_of_servers);


module.exports = router;