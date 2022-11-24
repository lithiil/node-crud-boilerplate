const mongoose = require("mongoose");

/**
 * @typedef User
 * @property {integer} id
 * @property {string} name.required - The name of the user
 * @property {string} email.required.unique
 * @property {string} password.required
 * @property {string} location - If unspecified it defaults to "Nowhere"
 */
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    min: [3, "Your name field has too few characters"],
    max: [32, "Your name field hass too many characters"],
    required: [
      ,
      "The Name field is required, please provide a valid name! between 3 and 32 characters long",
    ],
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: [true, "This email address has already been used"],
    required: "Email address is required",
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    min: [8, "Password is too short!"],
    required: true,
  },
  location: {
    type: String,
    default: "Nowhere",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
