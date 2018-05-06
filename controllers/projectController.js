var async = require('async');

var Project = require('../models/project');

const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

/**
 * Display list of all Projects.
 */
exports.project_list = function(req, res, next) {

  Project.find({}, 'name_text name_machine')
    .exec(function (err, list_projects) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('projects_list', { title: 'Project List', projects_list: list_projects });
    });
    
};

/**
 * Display detail page for a specific Project.
 */
exports.project_detail = function(req, res, next) {

  async.parallel(
    {
      project: function(callback) {
        Project.findById(req.params.id)
          .exec(callback);
      },
      //genre_books: function(callback) {
      //  Book.find({ 'project': req.params.id })
      //    .exec(callback);
      //},
    },
    function(err, results) {
      if (err) { return next(err); }
      if (results.project==null) { // No results.
        var err = new Error('Project not found');
        err.status = 404;
        return next(err);
      }
    // Successful, so render
    res.render('projects_detail', { title: 'Project Detail', project: results.project } );
  });

};

/**
 * Display Project create form on GET.
 */
exports.project_create_get = function(req, res, next) {
  res.render('projects_form', { title: 'Create Project' });
};

/**
 * Handle Project create on POST.
 */
exports.project_create_post = [
   
    // Validate that the name field is not empty.
    body('name_text', 'Project name required').isLength({ min: 1 }).trim(),
    body('name_machine', 'Machine name required').isLength({ min: 1 }).trim(),

    // Sanitize (trim and escape) the name field.
    sanitizeBody('name_text').trim().escape(),
    sanitizeBody('name_machine').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a project object with escaped and trimmed data.
        var project = new Project(
          { 
            name_text: req.body.name_text,
            name_machine: req.body.name_machine,
           }
        );


        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values/error messages.
            res.render('projects_form', { title: 'Create Project', project: project, errors: errors.array()});
            return;
        }
        else {
          // Data from form is valid.
          project.save(function (err) {
           if (err) { return next(err); }
           // Genre saved. Redirect to project detail page.
           res.redirect(project.url);
          });
        }
    }
];

// Display Project delete form on GET.
exports.project_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Project delete GET');
};

// Handle Project delete on POST.
exports.project_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Project delete POST');
};

// Display Project update form on GET.
exports.project_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Project update GET');
};

// Handle Project update on POST.
exports.project_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Project update POST');
};