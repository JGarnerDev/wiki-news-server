const app = require("express")();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();
app.use(cors);
app.use(bodyParser.json());

const PORT = process.env.PORT || 3002;
const MONGO_DB_URI = process.env.MONGO_DB_URI;

// Routes

const getRoutes = require("./routes/get");

app.use("/api/news", getRoutes);

//  DB

mongoose.connect(MONGO_DB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// Listen

app.listen(PORT, () => {
  console.log(`Server's up on port ${PORT}`);
});
