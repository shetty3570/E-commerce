const express = require('express')
const { CreatePayment } = require("../Controllers/PaymentCtrl");



const router = express.Router();

router.post('/create-payment', CreatePayment)

module.exports = router;