const mongoose = require('mongoose');

let AccountBalanceSchema = new mongoose.Schema({
    accountId: { type: mongoose.SchemaTypes.ObjectId, ref: 'Account' },
    balance: { type: mongoose.SchemaTypes.Number, required: true },
})


module.exports = mongoose.model("AccountBalance", AccountBalanceSchema)