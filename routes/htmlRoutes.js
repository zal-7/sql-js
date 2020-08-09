const path = require("path");
const router = require("express").Router();


router.get("/", function(req, res) {
  res.send(path.join(__dirname, "../public/notes.html"));
});


router.get("*", function(req, res) {
  res.send(path.join(__dirname, "../public/index.html"));
});

module.exports = router;