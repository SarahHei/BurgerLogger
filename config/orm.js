var mySQLconnection = require("./connection.js");

var orm = {
    selectAll: function (tableName, cb) {
        mySQLconnection.query('SELECT * FROM ' + tableName + ";", function (error, result) {
            if (error) throw error;
            cb(result);          
          });
        
    },
    insertOne: function (tableName, nameOfBurger, eaten, cb) {
            var queryString = 'INSERT INTO ' + tableName + ' (burger_name, devoured) ' + 'VALUES (' + "'" + nameOfBurger + "'" + ', ' + eaten +')';
            mySQLconnection.query(queryString, function (error, result) {
                if (error) throw error;
                cb(result);
            });
        
    },
    updateOne: function (tableName, burgerID, eaten, cb) {
        var queryString = "UPDATE " + tableName +
                          " SET devoured = " + eaten +
                          " WHERE id = " + burgerID +";"
        
        mySQLconnection.query(queryString, function (error, result) {
            if (error) throw error;
             
            cb(result);
            
        })                 
    }


}

module.exports = orm;
