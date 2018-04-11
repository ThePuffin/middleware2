var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get(
  "/superMiddleware",
  function(req, res, next) {
    console.log("hello middleware");
    return next();
  },
  (req, res, next) => {
    res.send("hello world");
  }
);

module.exports = router;
