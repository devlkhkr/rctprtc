const express = require('express');
const mysql = require("mysql");
const router = express();

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1212',
    database : 'test_db'
});

router.get('/', (req,res) => {
    res.send({ main : "main"});
})

router.get('/chats', (req,res) => {
    connection.query("select * from chats", function(err, rows) {
        res.send(rows)
    })
})
 
module.exports = router;