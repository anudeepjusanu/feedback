
const user_service = require('./users_service');
const tenant_service = require('./tenants_service');
const feedback_service = require('./feedback_service');
module.exports = {
    user_service: user_service,
    tenant_service: tenant_service,
    feedback_service: feedback_service
}