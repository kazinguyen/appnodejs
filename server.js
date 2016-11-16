var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Tao mot parser co dang application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('Server-01'));

app.get('/', function (req, res) {
   res.sendFile(__dirname + "/index.html");
})

app.post('/process_post', urlencodedParser, function (req, res) {
   response = {
       first_name:req.body.first_name,
       last_name:req.body.last_name
   };
   console.log(response.first_name);
   if (response.first_name != "kazinguyen") {
   		res.end(JSON.stringify(response));
   } else {
	   res.end("Error Page!");
   }
		
})

var server = app.listen(8888, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("http://%s:%s", host, port)

})