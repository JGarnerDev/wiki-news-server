const mongodb = require("mongodb");
const { mongooseConfig } = require("./config");
const app = require("./src/app");
require("dotenv").config();

let db;

const PORT = process.env.PORT || 3002;

mongodb.connect(process.env.MONGO_DB_URI, mongooseConfig, (err, client) => {
  db = client.db();
  db.listCollections().toArray((err, collections) => {
    const dates = [...collections].map((col) => {
      return col.name;
    });
    process.env["DATES"] = dates.sort();
  });
  app.listen(PORT, () => {
    console.log(`|| == Server's up on port ${PORT} == ||`);
  });
});

module.exports = db;
