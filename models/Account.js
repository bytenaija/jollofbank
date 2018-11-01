const mongoose = require('mongoose');

let AccountSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    accountNumber: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    accountType: { type: String, required: true },
    email: { type: String },
    bvn: { type: String, required: true },
})

AccountSchema.methods.getAccountNumber = (cb) => {
    cb(null, this.accountNumber);
}

module.exports = mongoose.model("Account", AccountSchema)