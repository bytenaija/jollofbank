'use strict';

let mongoose = require("mongoose");



let UserSchema = new mongoose.Schema({
    email: { type: String, index: { unique: true } },
    name: { type: String, required: true },
    bvn: { type: String, required: true },
})


module.exports = mongoose.model("User", UserSchema)