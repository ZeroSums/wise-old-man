const express = require('express');
const controller = require('./group.controller');

const api = express.Router();

api.get('/', controller.listGroups);
api.get('/:id', controller.viewGroup);
api.get('/:id/monthly-top', controller.monthlyTop);
api.get('/:id/members', controller.listMembers);
api.post('/', controller.createGroup);
api.put('/:id', controller.editGroup);
api.delete('/:id', controller.deleteGroup);
api.post('/:id/add', controller.addMembers);
api.post('/:id/remove', controller.removeMembers);
api.put('/:id/roles', controller.changeRole);

module.exports = api;
