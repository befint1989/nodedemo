var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 5200;

var api = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', api);

//test
api.post('/test/', function(req, res){
	var jsonrpc = req.body.jsonrpc;
	console.log(jsonrpc);
	res.end('');
});

app.get('/', function (req, res) {
    res.send('Hi, The API is at http://localhost:' + port + '/api');
});

app.listen(port, function () {

    console.log('The server is running at http://localhost:' + port);
});
