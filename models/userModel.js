const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Age: {
    type: Number
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  facultyOrDepartment: {
    type: String
  },
  contributionType: {
    type: String
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
