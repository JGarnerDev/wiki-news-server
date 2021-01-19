const router = require("express").Router();

require("dotenv").config();

router.get("/", async (req, res) => {
  try {
    const dates = process.env.DATES.split(",");
    res.json(dates);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
