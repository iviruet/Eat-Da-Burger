const connection = require("./connection.js");

const orm = {
    all: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (err, result) => {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
    // insertOne: function(){

    // }
    updateOne: function(table, objColVals, condition, cb) {
            let queryString = "UPDATE " + table;
        
            queryString += " SET ";
            queryString += objToSql(objColVals);
            queryString += " WHERE ";
            queryString += condition;
        
            console.log(queryString);
            connection.query(queryString, (err, result) => {
              if (err) {
                throw err;
              }
        
              cb(result);
            });  
    }
}
module.exports = orm;