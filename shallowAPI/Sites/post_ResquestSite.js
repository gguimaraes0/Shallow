exports.handler = async (event) => {
    // TODO implement\
    var responseMessage = {};
    var statusCode;

    try {
        var site = event.body.site;
        var user = event.body.user;
        // conexão com o  banco de dados para adicionar o site e manter com status pendente
        statusCode = '200';
        responseMessage.message = 'Solicitação feita com sucesso';
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
