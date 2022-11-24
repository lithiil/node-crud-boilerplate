const express = require("express");
const {
  register,
  getUsers,
  getUserById,
  deleteUserById,
} = require("../controllers/users");

const router = express.Router();
router.get("/users", getUsers);
router.get("/user/:id", getUserById);
router.delete("/user/:id", deleteUserById);
router.post("/register", register);
module.exports = router;
