
var model = require('../models');
var _ = require('underscore');


var service = {};
service.Create = Create;
service.GetActiveTenants = GetActiveTenants;
service.GetAllTenants = GetAllTenants;

module.exports = service;


function Create(tenant) {
    return new Promise((resolve, reject) => {
        model.Tenants.create(tenant, function (err, info) {
            err ? reject(err) : resolve(info);
        });
    });
}

function GetActiveTenants() {
    return new Promise((resolve, reject) => {
        model.Tenants.find({'active': true},(err, docs) => {
            err ? reject(err) : resolve(docs);
        });
    });
}

function GetAllTenants() {
    return new Promise((resolve, reject) => {
        model.Tenants.find((err, docs) => {
            err ? reject(err) : resolve(docs);
        });
    });
}


