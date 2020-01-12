var express = require("express");
var router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", function(req, res) {
  res.send("yo yo yo");
});

router.get("/getkanji", function(req, res) {
  res.send("kanji list");
});

router.get("/getuser", function(req, res) {
  res.send("User info");
});

module.exports = router;
