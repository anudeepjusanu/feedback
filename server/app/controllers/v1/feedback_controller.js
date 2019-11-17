var service = require('../../services');
var controller = {};
controller.CreateFeedback = CreateFeedback;
controller.GetByTenantDevice = GetByTenantDevice;
controller.postFeedback = postFeedback;
controller.postDeviceFeedback = postDeviceFeedback;
module.exports = controller;

function CreateFeedback(req, res) {
    service.feedback_service.Create(req.body).then(result => {
        res.json(result);
    }, error => {
        res.json(error);
    });
}

function GetByTenantDevice(req, res) {
    service.feedback_service.GetBytenantDevice(req.query.tenantId, req.query.type).then(result => {
        res.json(result);
    }, error => {
        res.json(error);
    });
}

function postFeedback(req, res) {
    service.feedback_service.PostFeedback(req.query.id, req.query.questionId, req.body).then(result => {
        res.json(result);
    }, error => {
        res.json(error);
    });
}

function postDeviceFeedback(req, res){
    var answer = {
        "text": req.query.text
    }
    service.feedback_service.PostFeedback(req.query.id, req.query.questionId, answer).then(result => {
        res.json(result);
    }, error => {
        res.json(error);
    });
}