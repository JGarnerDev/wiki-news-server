const router = require("express").Router();
const mongodb = require("mongodb");
const { mongooseConfig } = require("../../config");
require("dotenv").config();

router.get("/latest", async (req, res) => {
  try {
    const dates = process.env.DATES.split(",");
    const latestDate = dates[dates.length - 1];

    mongodb.connect(
      process.env.MONGO_DB_URI,
      mongooseConfig,
      async (err, client) => {
        const db = client.db();
        const news = await db.collection(latestDate).find({}).toArray();
        res.json(news[0]);
      }
    );
  } catch (e) {
    console.log(e);
  }
});

router.get("/:date", async (req, res) => {
  try {
    const date = req.params.date;

    mongodb.connect(
      process.env.MONGO_DB_URI,
      mongooseConfig,
      async (err, client) => {
        const db = client.db();
        const news = await db.collection(date).find({}).toArray();
        res.json(news[0]);
      }
    );
  } catch (e) {
    console.log(e);
  }
});

router.get("/:date/categories", async (req, res) => {
  res.send("SUP");
});

router.get("/:date/category", async (req, res) => {
  res.send("SUP");
});

module.exports = router;
