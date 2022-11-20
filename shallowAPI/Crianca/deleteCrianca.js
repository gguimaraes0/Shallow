const mysql = require('mysql');
exports.handler = (event, context, callback) => {
	const con = mysql.createConnection({
        host: 'shallowdb.cu13esdhujyb.sa-east-1.rds.amazonaws.com',
        user: 'admin',
        port: "3306",
        password: '12345678',
        database: 'ShallowDB',
	});

	var responseMessage = '';
	var statusCode;

	try {
	    var crianca = JSON.parse(event.body);
		context.callbackWaitsForEmptyEventLoop = false;
		const sql = "DELETE FROM crianca WHERE id = " + crianca.id;
		con.query(sql, (err, res) => {
			if (err) {
				throw err;
			}
			else {
				callback(null, 'Criança excluída com sucesso');
			}
		});
	}
	catch (ex) {
		statusCode = '500';
		responseMessage = 'Ocorreu um problema no servidor ' + ex;
	}
	finally {
		const response = {
			statusCode: statusCode,
			body: responseMessage
		};
		return response;
	}
};
