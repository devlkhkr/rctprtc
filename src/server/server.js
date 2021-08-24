const express = require('express');
const app = express();
// const api = require('./routes/index');
const cors = require('cors');
const bodyParser = require("body-parser");
const mysql = require("mysql");
const indexRouter = require('./routes/index');

app.use(cors());

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1212',
    database : 'test_db'
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', indexRouter);

// app.use('/api', api);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
})
