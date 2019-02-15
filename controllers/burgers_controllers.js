var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burger: data
      };
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers/", function(req, res) {
    console.log(req.body.eaten)
    burger.create(req.body.name, req.body.eaten, function(result) {
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var burgerID = req.params.id;
    var eatenOrNaw = req.body.eaten;
    console.log(eatenOrNaw);
    console.log("ID:", burgerID);
  
    burger.update(burgerID, eatenOrNaw, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  module.exports = router;