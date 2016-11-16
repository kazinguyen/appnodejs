var sql = require("mysql");
var connection = sql.createConnection({
    host        : '103.18.6.60',
    user        : 'vietna1p_admin',
    password    : 'kazinguyen',
    database    : 'vietna1p_shop'
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