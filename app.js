var express = require("express");
var app = express();
var server = require("http").createServer(app);
var bodyParser = require("body-parser")

var urlencodedParser = bodyParser.urlencoded({ extended: false })

server.listen("8888", function() {
	console.log("Create Server Done! Port : %s", "8888");
})

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
})

app.post("/check", urlencodedParser, function(req, res) {
	console.log(req);
	var obj = {
		"name" : "Nguyen Trung",
		"job"  : "Developer"
	}

	res.send(obj);
})

app.get("/:id", function(req, res) {
	if (parseInt(req.params.id) == 10) {
		res.send("Anh Trung Dep Trai!");
	} else {
		res.sendFile(__dirname + "/index.html");
	}
})