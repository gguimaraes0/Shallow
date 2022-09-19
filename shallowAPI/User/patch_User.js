exports.handler = async (event) => {
    var responseMessage = {};
    var statusCode;
    try {
        var user = JSON.parse(event.body)

        // é feito o get no banco pelo usuario
        var userDatabase = {
            name : 'caio',
            email : 'caio@gmail.com'
         };
        if (userDatabase.name == user.name) {
            responseMessage.message = 'O nome ' + user.name + ' já está sendo utilizado';
            statusCode = '200';
        }
        else if(userDatabase.email == user.email){
            responseMessage.message = 'O email ' + user.email + ' já está sendo utilizado';
            statusCode = '200';
        }
        else {
            responseMessage.message = 'Usuário ' + user.name + ' atualizado com sucesso';
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

