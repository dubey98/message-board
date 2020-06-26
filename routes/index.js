var express = require("express");
var router = express.Router();
const moment = require("moment");

const messages = [
  {
    text: "Everything's Good!!",
    user: "shiv",
    added: new Date(),
    formatted_date: function () {
      return moment(this.added).format("DD MMMM YYYY, h:mm a");
    },
  },
  {
    text: "You are awesome!",
    user: "george",
    added: new Date(),
    formatted_date: function () {
      return moment(this.added).format("DD MMMM YYYY, h:mm a");
    },
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "MIni Messageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "Create message" });
});

router.post("/new", function (req, res, next) {
  let message = req.body.message;
  let user = req.body.user;
  // let added = new Date();
  messages.push({
    text: message,
    user: user,
    added: new Date(),
    formatted_date: function () {
      return moment(this.added).format("DD MMMM YYYY, h:mm a");
    },
  });
  res.redirect("/");
});

module.exports = router;
