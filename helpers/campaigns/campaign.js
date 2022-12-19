const Campaign = require("../../models/Campaign");

function newCampaign(req, res) {
  const { title, description, owner } = req.body;
  Campaign.findOne({ title: title }).then((campaign) => {
    if (campaign) {
      console.log(`Campaign already exists with details: ${campaign}`);
      res.json({
        status: "campaign already exists",
        campaignDetails: campaign,
      });
    } else {
      const newCampaign = new Campaign({
        title,
        description,
        owner,
      });
      newCampaign
        .save()
        .catch((err) => res.json({ error: err }))
        .then(() => {
          console.log("Campaign created successfuly");
          res.json({
            status: "Campaign Created Successfuly!",
            campaignDetails: newCampaign,
          });
        });
    }
  });
}

module.exports = { newCampaign };
