const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/all", (req, res) => {
  let news;
  res.send(news);
});
router.get("/:category", (req, res) => {
  const category = req.params.category;
  let news;
  res.send(news);
});

module.exports = router;
