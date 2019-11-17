'use strict';
var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Users = new Schema({
    mobile: { type: Number, required: true, unique: true },
    hash: { type: String, required: true },
    date: { type: Date, default: Date.now },
    memberShipEnd: { type: Date },
    active: { type: Boolean, default: true },
    role: { type: String, required: true },
    tenantId: {type: String}
});

module.exports = mongoose.model('Users', Users);
