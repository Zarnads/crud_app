const mysql = require('mysql')

const connection = mysql.createConnection({
    host: '15.206.7.200', // host for connection
    port:3310 , // default port for mysql is 3306
    database: 'zarnas', // database from which we want to connect out node application
    user: 'zarnas', // username of the mysql connection
    password: "9XB7bCWfgJqKyjRtGZ4vvfM68RunVWc5" // password of the mysql connection
    });
   
module.exports= connection;