var restify = require('restify');
conteudoCardController = require("./modules/conteudoCardController");

function respond(req, res, next) {
    res.send('Multibacter Health Check');
    next();
}

var server = restify.createServer();
server.get('/', respond);
server.get('/:tipoConteudo', conteudoCardController.retornarConteudo.bind(this))

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});