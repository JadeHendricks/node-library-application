const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

//Author - name of the collection
//authorSchema - defines that table
module.exports = mongoose.model('Author', authorSchema);
