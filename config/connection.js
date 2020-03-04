const mysql = require("mysql");

////SET UP CONNECTION////
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "triforce",
    database: "burgers_db"
});

////////CONNECT TO DB///////
connection.connect(err => {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

////////EXPORT CONNECTION///////
module.exports = connection;