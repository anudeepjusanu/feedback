var service = require('../../services');
var tenantsController = {};
tenantsController.GetActiveTenants = GetActiveTenants;
tenantsController.GetAllTenants = GetAllTenants;
module.exports = tenantsController;


function GetActiveTenants(req, res) {
    if (req.query.id) {
        GetUserById(req, res);
    }  else {
        service.tenant_service.GetActiveTenants().then(result => {
            res.json(result);
        }, error => {
            res.json(error);
        });
    }
}

function GetUserById(req, res) {
    service.user_service.GetUserById(req.query.id).then(result => {
        res.json(result);
    }, error => {
        res.json(error);
    });
}

function GetAllTenants(req, res){
    service.tenant_service.GetAllTenants().then(result => {
        res.json(result);
    }, error => {
        res.json(error);
    });
}


