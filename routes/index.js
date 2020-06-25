var express = require("express");
var router = express.Router();
const moment = require("moment");

const messages = [
  {
    text: "Everything's Good!!",
    user: "shiv",
    added: new Date(),
    formatted_date: function () {
      return moment(this.added).format("DD MMMM YYYY");
    },
  },
  {
    text: "You are awesome!",
    user: "george",
    added: new Date(),
    formatted_date: function () {
      return moment(this.added).format("DD MMMM YYYY");
    },
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "MIni Messageboard", messages: messages });
});

module.exports = router;
