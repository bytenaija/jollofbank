const mongoose = require('mongoose');

let AccountSchema = new mongoose.Schema({
    userId: { type: mongoose.SchemaTypes.ObjectId, ref: 'User'},
    accountNumber: { type: String, required: true, unique: true },
    accountType: { type: String, required: true },
})

AccountSchema.methods.getAccountNumber = (cb) => {
    cb(null, this.accountNumber);
}

module.exports = mongoose.model("Account", AccountSchema)