var express = require('express');
var router = express.Router();

// Require controller modules.
var project_controller = require('../controllers/projectController');

// GET catalog home page.
router.get('/', project_controller.project_list);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/project/create', project_controller.project_create_get);

// POST request for creating Book.
router.post('/project/create', project_controller.project_create_post);

// GET request to delete Book.
router.get('/project/:id/delete', project_controller.project_delete_get);

// POST request to delete Book.
router.post('/project/:id/delete', project_controller.project_delete_post);

// GET request to update Book.
router.get('/project/:id/update', project_controller.project_update_get);

// POST request to update Book.
router.post('/project/:id/update', project_controller.project_update_post);

// GET request for one Book.
router.get('/project/:id', project_controller.project_detail);

// GET request for list of all Book items.
router.get('/projects', project_controller.project_list);


module.exports = router;