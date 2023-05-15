const express = require("express");
const app = express();
const checkDate = require("./middlewares/checkDate");
const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/:date?", checkDate, function (req, res) {
  let { date } = req.params;

  if (!date) {
    date = new Date();
  }

  const newDate = new Date(date);

  if (newDate.toString() === "Invalid Date") {
    return res.json({ error: "Invalid Date" });
  }

  const unixtime = Number(newDate.getTime());
  const claveUTC = newDate.toUTCString();
  res.json({ unix: unixtime, utc: claveUTC });
});

// listen for requests :)
const listener = app.listen(3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
