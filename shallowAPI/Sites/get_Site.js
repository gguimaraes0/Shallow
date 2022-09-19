exports.handler = async (event) => {
    // TODO implement\
    var responseMessage = {};
    var statusCode;

    try {
        // conexão com o  banco de dados
        var sites = [
            {url: 'www.google.com.br', permission:'1'},
            {url: 'www.csmoney.com', permission:'3'} //permissionamento feito podendo estar aprovado,pendente e negado (1,2,3)
        ];
        responseMessage = sites;
        statusCode = '200';
        
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
