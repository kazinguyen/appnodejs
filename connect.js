var sql = require("mysql");
var connection = sql.createConnection({
    host        : '',
    user        : '',
    password    : '',
    database    : ''
});

connection.connect(function(err) {
    console.log(err);
});

connection.query('SELECT * FROM  ps_cart', function(err, row, field) {
    console.log(err + " " + row + " " + field);
    if (!err) 
        console.log(row);
    else
        console.log("Error!");
})

connection.end();