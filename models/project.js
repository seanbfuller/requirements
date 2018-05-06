var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema(
  {
    name_text: {type: String, required: true, max: 40},
    name_machine: {type: String, required: true, max: 20},
  }
);

// Virtual for URL
ProjectSchema
.virtual('url')
.get(function () {
  return '/projects/' + this._id;
});

// Export model
module.exports = mongoose.model('Project', ProjectSchema);