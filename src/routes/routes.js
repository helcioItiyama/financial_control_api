const express = require('express');
const transactionRouter = express.Router();
const transactionService = require('../services/transactionService');

transactionRouter.get('/', transactionService.list);
transactionRouter.post('/', transactionService.create);
transactionRouter.put('/:id', transactionService.edit);
transactionRouter.delete('/:id', transactionService.deleteOne);


module.exports = transactionRouter;
