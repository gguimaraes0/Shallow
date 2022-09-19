exports.handler = async (event) => {
    // TODO implement\
    var responseMessage = {};
    var statusCode;

    try {
        var site = event.body.site;
        var username = event.body.username;
        
        // é feita a conexão com o banco de dados para alterar a permissão do site

        statusCode = '200';
        responseMessage.message = 'Resposta enviada com sucesso';
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
