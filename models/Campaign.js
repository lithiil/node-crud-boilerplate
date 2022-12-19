const mongoose = require("mongoose");
const Schema = require;
/**
 * @typedef Campaign
 * @property {string} title
 * @property {string} description
 * @property {integer} id
 * @property {integer} owner
 * @property {Array.<User>} players
 * @property {string} createdAt
 */
const CampaignSchema = new mongoose.Schema({
  title: {
    type: String,
    min: [1, "Your name field has too few characters"],
    max: [50, "Your name field hass too many characters"],
    required: [
      ,
      "The title field is required, please provide a valid title! between 1 and 50 characters long",
    ],
    unique: [true, "This title has already been used"],
  },
  description: {
    type: String,
    trim: true,
    lowercase: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  mechanics: {
    type: String,
    default: "Custom",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Campaign = mongoose.model("Campaign", CampaignSchema);
module.exports = Campaign;
