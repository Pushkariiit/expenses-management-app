const express = require('express');
const { addAllTransaction, getAllTransaction,editTransaction,deleteTransaction } = require('../controllers/transactionController');

const router = express.Router();

// add

router.post('/add-transaction',addAllTransaction);

router.post('/edit-transaction',editTransaction);

router.post('/delete-transaction',deleteTransaction);


// get

router.post('/get-transaction',getAllTransaction);

module.exports = router;