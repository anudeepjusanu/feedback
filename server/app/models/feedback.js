'use strict';
var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Feedback = new Schema({
    tenantId: {type: String, required: true},
    deviceType: {type: String, required: true},
    date: {type: Date, default: Date.now},
    questions: [{
        "name": {type: String},
        "options": {type: Array},
        "type": {type: String},
        "answers": [
            {
                "text": String,
                 date: {type: Date, default: Date.now},
            }

        ]
    }],
    active: {type: Boolean, default: true}
});

module.exports = mongoose.model('Feedback', Feedback);
