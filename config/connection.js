const mysql = require("mysql");
const DB_PASSWORD = require("../config/password.js");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306, 
    user: "root",
    password: DB_PASSWORD,
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connectedd as id " + connection.threadId);
});

module.exports = connection;