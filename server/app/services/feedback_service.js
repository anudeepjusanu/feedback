
var model = require('../models');
var _ = require('underscore');


var service = {};
service.Create = Create;
service.GetBytenantDevice = GetBytenantDevice;
service.PostFeedback = PostFeedback;

module.exports = service;


function Create(feedback) {
    return new Promise((resolve, reject) => {
        model.Feedback.create(feedback, function (err, info) {
            err ? reject(err) : resolve(info);
        });
    });
}

function GetBytenantDevice(tenantId, type) {
    return new Promise((resolve, reject) => {
        model.Feedback.find({tenantId: tenantId, deviceType: type}, function (err, info) {
            err ? reject(err) : resolve(info);
        });
    });
}

function PostFeedback(id, questionId, answer) {
    return new Promise((resolve, reject) => {
        model.Feedback.findOneAndUpdate({ _id: id, "questions._id": questionId }, { $push: { 'questions.$.answers': [answer] } }, { new: true }, (err, doc) => {
            console.log(err);
            err ? reject(err) : resolve(doc);
        });
    });
}

