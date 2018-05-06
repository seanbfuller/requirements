var async = require('async');

var Project = require('../models/project');

// Display list of all Projects.
exports.project_list = function(req, res, next) {

  Project.find({}, 'name_text name_machine')
    .exec(function (err, list_projects) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('projects_list', { title: 'Project List', projects_list: list_projects });
    });
    
};

// Display detail page for a specific Project.
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

// Display Project create form on GET.
exports.project_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Project create GET');
};

// Handle Project create on POST.
exports.project_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Project create POST');
};

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