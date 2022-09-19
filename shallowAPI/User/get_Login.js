exports.handler = async (event) => {
    // TODO implement\
    var responseMessage = {};
    var statusCode;

    try {
    var user = JSON.parse(event.body)
    
        // conexão com o  banco de dados

        if (user.name == 'caio' && user.password == '1234') {
            responseMessage.message = 'O usuário ' + user.name + ' foi logado com sucesso';
            responseMessage.type = '1'; // podendo ser responsavel ou dependente (1 ou 2)
            statusCode = '200';
        }
        else {
            responseMessage.message = 'Login ou senha inválidos';
            // podendo ser responsavel ou dependente (1 ou 2)
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
