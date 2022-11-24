const User = require("../models/User");
const { createUser } = require("../helpers/users/register");

/**
 * Shows all the existing users
 * @route GET /users
 * @group User
 * @consumes application/json
 * @produces application/json
 * @returns {Array.<User>} 200 A list of users
 * @returns {Error}  default - Unexpected error
 */
const getUsers = (req, res) => {
  User.find({}).then(function (users) {
    res.send(users);
  });
};
/**
 * Returns the details of a user which is specified in the request
 * @route GET /user/:id
 * @group User
 * @param {id} id.query.required
 * @consumes application/json
 * @produces application/json
 * @returns {User.model} 200 - Details of a user
 * @returns {Error}  default - Unexpected error
 */
const getUserById = async (req, res, next) => {
  user = await User.findById(req.params.id);
  if (user) {
    res.json({ user: user });
  } else {
    res.json({ status: "No user exists with that id" });
  }
};

/**
 * Deletes a user that is specified in the request
 * @route DELETE /user/:id
 * @group User
 * @consumes application/json
 * @produces application/json
 * @returns {object} 200 - Successfuly deleted user with id ${req.params.id}
 * @returns {Error}  default - Unexpected error
 */
const deleteUserById = async (req, res, next) => {
  await User.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({ status: `Successfuly deleted user with id ${req.params.id}` });
    })
    .catch((err) => {
      res.json({ error: err });
    });
};

/**
 * Creates a user
 * @route POST /register
 * @group User
 * @param {User.model} user.body.required
 * @consumes application/json
 * @produces application/json
 * @returns {object} 200 - An object containing the user details
 * @returns {Error}  default - Unexpected error
 */
const register = (req, res, next) => {
  createUser(req, res);
};

module.exports = {
  register,
  getUsers,
  getUserById,
  deleteUserById,
};
