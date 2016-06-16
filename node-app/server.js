var util = require('util');
var http = require('http');
var os = require('os');
var port = process.env.PORT || process.env.port || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

var hostname = os.hostname();

var server = http.createServer(function (req, res) {

   req.on('data', function (data) {});
   req.on('end', function () {
      console.log("Invoked");
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<html><head><title></title></head>');
      res.write('<body bgcolor="' + process.env.COLOR + '">');
      res.write('<h1>' + process.env.BACKGROUND_MSG + '</h1>');
      res.write('<h1> Ambiente: ' + process.env.ENVIRONMENT + '</h1>');
	  res.write('<h3>' + hostname + '</h3>');
      res.write('</body>');
      res.end('\n');
   });

});
console.log('Initializing Server on ' + ip + ':' + port);
server.listen(port,ip, function(){
   var address = server.address();
   console.log('Server running on ' + address.address + ':' + address.port);
});
