var express = require("express");
var router = express.Router();
const kanjiHandler = require("./handlers/kanjiHandler");
const usersHandler = require("./handlers/usersHandler");

router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", function(req, res) {
  res.send("yo yo yo");
});

router.get("/getkanji", function(req, res) {
  //res.send("kanji list");
  response = kanjiHandler.getAllKanji;
  res.send(response);
});

router.post("/register", function(req, res) {
  response = usersHandler.register(req);
  res.send(response);
});

module.exports = router;
