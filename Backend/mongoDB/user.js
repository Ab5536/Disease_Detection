const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    // match: /.+\@.+\..+/ // Validates email format
  },
  name: {
    type: String,
   // required: true
  },
  phoneNumber: {
    type: String,
    //required: true
  },
  password: {
    type: String,
    //required: true
  },
  city: {
    type: String,
    //required: true
  },
  society: {
    type: String,
    //required: true
  },
  residenceType: {
    type: String,
    enum: ['Apartment', 'House', 'Other'], // Specify allowed values
    //required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'], // Specify allowed values
    //required: true
  }
});

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
