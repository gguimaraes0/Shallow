exports.handler = async (event) => {
    // TODO implement\
    var responseMessage = {};
    var statusCode;

    try {
    var user = JSON.parse(event.body);

      // é feita a procura por usuários no banco pelo user.name
      var userDatabase = 'caio';
      if (userDatabase == user.name) {
        // é feito o delete no banco dos dados do usuário
          responseMessage.message = 'Usuário excluído com sucesso';
          statusCode = '200';
      }
      else {
          responseMessage.message = 'O usuário não foi encontrado';
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
