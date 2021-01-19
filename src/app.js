const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");

const catchException = require("./middleware/catchException");

const newsRoutes = require("./routes/news");
const datesRoutes = require("./routes/dates");

app.use(cors());
app.use(bodyParser.json());

app.use("/api/news", newsRoutes, catchException);
app.use("/api/dates", datesRoutes, catchException);

app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json({ message: error.message });
});

module.exports = app;
