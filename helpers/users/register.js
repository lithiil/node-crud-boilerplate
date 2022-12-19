const bcrypt = require("bcryptjs");
const User = require("../../models/User");

function createUser(req, res) {
  const { name, email, location, password } = req.body;
  if (!name || !email || !password) {
    console.log(
      `Attempting to create user with details: ${name}, ${email}, ${password}`
    );
    res.json({ status: "Fill empty fields" });
  }
  User.findOne({ email: email }).then((user) => {
    if (user) {
      console.log(`User already exists with details: ${user}`);
      res.json({ status: "user already exists", userDetails: user });
    } else {
      const newUser = new User({
        name,
        email,
        location,
        password,
      });
      //Password Hashing
      bcrypt.genSalt(10, (err, salt) =>
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().catch((err) => res.json({ error: err }));
        })
      );
      console.log("User created successfuly");
      res.json({ status: "User Created Successfuly!", userDetails: newUser });
    }
  });
}

module.exports = {
  createUser,
};
