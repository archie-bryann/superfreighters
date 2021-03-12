const express = require('express');
const router = express.Router();

const PaymentsController = require('../controllers/payments'); 

router.post('/verify', PaymentsController.payments_verify_payment);

module.exports = router
