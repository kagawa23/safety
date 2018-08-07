const mysql = require('mysql');
exports.getConnection = function(){
	let connection = mysql.createConnection({
		host: 'localhost',
		database: 'safety',
		user: 'root',
		password: 'passw0rd'
	});
	connection.connect();
	return connection;
};
