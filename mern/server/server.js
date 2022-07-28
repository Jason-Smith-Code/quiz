const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
app.use(require("./routes/user"));
const User = require("./models/user.model");
// get driver connection
const dbo = require("./db/conn");

mongoose.connect("mongodb://localhost:5000");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    console.log("status okay");
    return res.json({ status: "ok", user: true });
  } else {
    console.log("status not okay");
    return res.json({ status: "error", user: false });
  }
});
