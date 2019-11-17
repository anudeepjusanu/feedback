var express = require('express');
const router = express.Router();
var controller = require('../controllers/v1');

router.route('/')
    .post(controller.feedback_controller.CreateFeedback);
router.route('/')
    .get(controller.feedback_controller.GetByTenantDevice);
router.route('/post')
    .post(controller.feedback_controller.postFeedback);
router.route('/devicePost')
    .post(controller.feedback_controller.postDeviceFeedback);
module.exports = router;

