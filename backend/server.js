const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.nextTick.PORT || 5000;

//middleware
app.use(cors());
app.use(bodyParser.json());

//mongo connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.error("mongodb connectrion error: ", err));

//route
app.use("/tasks", require("./routes/taskRoutes"));

app.listen(PORT, () => console.log("server running on port ${PORT}"));
