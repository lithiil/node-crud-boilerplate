const express = require("express");
const {
  register,
  getUsers,
  getUserById,
  deleteUserById,
} = require("../controllers/users");

const {
  createCampaign,
  getcampaigns,
  getCampaignById,
  deleteCampaignById,
} = require("../controllers/campaigns");

// Users
const router = express.Router();
router.get("/users", getUsers);
router.get("/user/:id", getUserById);
router.delete("/user/:id", deleteUserById);
router.post("/register", register);

// Campaigns
router.get("/campaigns", getcampaigns);
router.get("/campaign/:id", getCampaignById);
router.delete("/campaign/:id", deleteCampaignById);
router.post("/campaigns", createCampaign);
module.exports = router;
