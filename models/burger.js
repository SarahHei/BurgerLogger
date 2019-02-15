var orm = require("../config/orm");

var burger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    create: function(nameOfBurger, eaten, cb) {
      orm.insertOne("burgers", nameOfBurger, eaten, function(res) {
        cb(res);
      });
    },
    update: function(burgerID, eaten, cb) {
      orm.updateOne("burgers", burgerID, eaten, function(res) {
        cb(res);
      });
    }
  };
  
  module.exports = burger;
