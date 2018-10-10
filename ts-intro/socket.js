//https://www.behance.net/rupalitakb40c8
var net = require('net');

var client = new net.Socket();
client.connect(8090, '34.224.38.188', function() {
	console.log('Connected');
    //client.write("{\"type\": \"publish\", \"address\": \"trackmelayer.12345\", \"headers\": {\"type\": \"text\", \"size\": \"small\"}, \"body\": {\"key\": \"value\"}}");
    client.write("<Length: 188>{\"type\": \"publish\",\"address\": \"trackmelayer.72345\",\"body\": { \"name\" : \"android\"}}");
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});