#! /usr/bin/env node

console.log('This script populates some test content.');

var async = require('async')
var Project = require('./models/project')

var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/requirements';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var projects = [];

// Create a project
function projectCreate(name_text, name_machine, cb) {
  projectdetail = {name_text:name_text , name_machine: name_machine }
  var project = new Project(projectdetail);
  project.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Project: ' + project);
    projects.push(project)
    cb(null, project)
  }  );
}

function createProjects(cb) {
  async.parallel(
    [
      function(callback) {
        projectCreate('Project One', 'one', callback);
      },
      function(callback) {
        projectCreate('Project Two', 'two', callback);
      },
      function(callback) {
        projectCreate('Project Three', 'three', callback);
      },
      function(callback) {
        projectCreate('Project Four', 'four', callback);
      }
    ],
    // optional callback
    cb
  );
}


async.series(
  [
    createProjects,
  ],
  // Optional callback
  function(err, results) {
    if (err) {
      console.log('FINAL ERR: '+err);
    }
    else {
      console.log('success');
    }
    // All done, disconnect from database
    mongoose.connection.close();
  }
);
