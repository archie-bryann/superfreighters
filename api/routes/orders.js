const express = require('express');
const router = express.Router();

const OrdersController = require('../controllers/orders'); 

router.post('/', OrdersController.orders_create_order);



module.exports = router
