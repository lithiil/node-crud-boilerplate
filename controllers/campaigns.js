const Campaign = require("../models/Campaign");
const { newCampaign } = require("../helpers/campaigns/campaign");

/**
 * Shows all the existing campaigns
 * @route GET /campaigns
 * @group Campaign
 * @consumes application/json
 * @produces application/json
 * @returns {Array.<Campaign>} 200 A list of campaigns
 * @returns {Error}  default - Unexpected error
 */
const getcampaigns = (req, res) => {
  Campaign.find({}).then(function (campaigns) {
    res.send(campaigns);
  });
};
/**
 * Returns the details of a campaign which is specified in the request
 * @route GET /campaign/:id
 * @group Campaign
 * @param {id} id.query.required
 * @consumes application/json
 * @produces application/json
 * @returns {Campaign.model} 200 - Details of a campaign
 * @returns {Error}  default - Unexpected error
 */
const getCampaignById = async (req, res, next) => {
  campaign = await Campaign.findById(req.params.id);
  if (campaign) {
    res.json({ campaign: campaign });
  } else {
    res.json({ status: "No campaign exists with that id" });
  }
};

/**
 * Deletes a campaign that is specified in the request
 * @route DELETE /campaign/:id
 * @group Campaign
 * @consumes application/json
 * @produces application/json
 * @returns {object} 200 - Successfuly deleted campaign with id ${req.params.id}
 * @returns {Error}  default - Unexpected error
 */
const deleteCampaignById = async (req, res, next) => {
  await Campaign.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        status: `Successfuly deleted campaign with id ${req.params.id}`,
      });
    })
    .catch((err) => {
      res.json({ error: err });
    });
};

/**
 * Creates a campaign
 * @route POST /campaigns
 * @group Campaign
 * @param {Campaign.model} campaign.body.required
 * @consumes application/json
 * @produces application/json
 * @returns {object} 200 - An object containing the campaign details
 * @returns {Error}  default - Unexpected error
 */
const createCampaign = (req, res) => {
  newCampaign(req, res);
};

module.exports = {
  createCampaign,
  getcampaigns,
  getCampaignById,
  deleteCampaignById,
};
