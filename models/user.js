'use strict';

let mongoose = require("mongoose");



let UserSchema = new mongoose.Schema({
    email: { type: String, index: { unique: true } },
    name: { type: String },
})


module.exports = mongoose.model("User", UserSchema)