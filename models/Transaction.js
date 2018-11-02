const mongoose = require('mongoose');

let TransactionSchema = new mongoose.Schema({
    accountId: { type: mongoose.SchemaTypes.ObjectId, ref: 'Account'},
    description: { type: String, required: true},
    amount: { type: String, required: true },
},{
    timestamps: true
})


module.exports = mongoose.model("Transaction", TransactionSchema)