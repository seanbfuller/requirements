var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema(
  {
    project_name_text): {type: String, required: true, max: 40},
    project_name_machine: {type: String, required: true, max: 20},
  }
);

// Virtual for URL
ProjectSchema
.virtual('url')
.get(function () {
  return '/project/' + this._id;
});

// Export model
module.exports = mongoose.model('Author', AuthorSchema);