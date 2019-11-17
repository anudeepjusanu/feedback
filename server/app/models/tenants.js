'use strict';
var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Tenants = new Schema({
    name: {type: String, required: true, unique: true},
    mobile: {type: Number, required: true, unique: true},
    email: {type: String, unique: true},
    date: {type: Date, default: Date.now},
    adminUserId: {type: String, unique: true},
    devices: [{
        name: {type: String},
        date: {type: Date, default: Date.now},
        id: {type: String, unique: true}
    }],
    active: {type: Boolean, default: true}
});

module.exports = mongoose.model('Tenants', Tenants);
