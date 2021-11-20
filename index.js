const http = require('http');

const PORT = process.env.PORT ? process.env.PORT : 3000;

const requestHandler = function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({ status: 'ok' }));
};

http
	.createServer(requestHandler)
	.listen(PORT)
	.on('listening', () => {
		console.log(`Server running at localhost:${PORT}`);
	});
