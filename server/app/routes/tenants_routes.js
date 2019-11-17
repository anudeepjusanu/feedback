var express = require('express');
const router = express.Router();
var tenantController = require('../controllers/v1/tenants_controller');

router.route('/')
    .get(tenantController.GetActiveTenants);
router.route('/all')
    .get(tenantController.GetActiveTenants);
module.exports = router;

