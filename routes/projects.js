/**
 * Routes for "projects"
 */
var express = require('express');
var router = express.Router();

// Require controller modules.
var project_controller = require('../controllers/projectController');

// GET page to list all projects
router.get('/', project_controller.project_list);

// GET request for one Project.
router.get('/:id', project_controller.project_detail);


// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/create', project_controller.project_create_get);

// POST request for creating Book.
router.post('/create', project_controller.project_create_post);

// GET request to delete Book.
router.get('/:id/delete', project_controller.project_delete_get);

// POST request to delete Book.
router.post('/:id/delete', project_controller.project_delete_post);

// GET request to update Book.
router.get('/:id/update', project_controller.project_update_get);

// POST request to update Book.
router.post('/:id/update', project_controller.project_update_post);

module.exports = router;