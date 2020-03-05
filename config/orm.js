const connection = require("./connection.js");

const orm = {
    selectAll: function(){
        const queryString = "SELECT ?? FROM ??";
        const query = connection.query(queryString, [], (err, result) => {
            throw err;
            log("\n" + query.sql);
            log(result);
        })

    }
    insertOne: function(){

    }
    updateOne: function(){

    }
}
module.exports = orm;