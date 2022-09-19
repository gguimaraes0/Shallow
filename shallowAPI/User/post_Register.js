exports.handler = async (event) => {
    var responseMessage = {};
    var statusCode;
    try {
        var user = JSON.parse(event.body)

        // é feita a procura por usuários no banco pelo user.name
        var userDatabase = 'caio'
        if (userDatabase == user.name) {
            responseMessage.message = 'O nome ' + user.name + ' já está sendo utilizado';
            statusCode = '200';
        }
        else {
            responseMessage.message = 'Usuário ' + user.name + ' cadastrado com sucesso';
            statusCode = '200';
        }
    }
    catch (ex) {
        statusCode = '500';
        responseMessage.message = 'Ocorreu um problema no servidor';
    }
    finally {

        const response = {
            statusCode: statusCode,
            body: JSON.stringify(responseMessage)
        };

        return response;
    }
};

