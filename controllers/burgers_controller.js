var express = require("express");
var router = express.Router();
var burger = require("../model/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create([
    "name", "devoured"
  ], [
    req.body.name, false
  ], function(result) {
    burger.all(function(data){
      var hbsObject = {
          burgers:data
      };
      console.log(hbsObject);
      res.redirect('/');
    });
  });
});


router.put("/api/burgers/update", function(req, res) {
  burger.update({
    devoured: req.body.id, function(result) {
      console.log("router.put", result);
      res.redirect('/');
    }
  });
});

module.exports = router;
