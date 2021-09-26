// var mysql = require('mysql');
import * as mysql from "mysql";
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'zmones',
    password: 'zmones',
    database: 'zmones'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

connection.end();