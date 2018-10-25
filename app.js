var restify = require('restify');
conteudoCardController = require("./modules/conteudoCardController");

function respond(req, res, next) {
    res.send('Multibacter Health Check');
    next();
}

var server = restify.createServer();
server.get('/', respond);
server.get('/qrcode/:qrCode', conteudoCardController.validaQRCOde.bind(this));
server.get('/conteudo/:tipoConteudo', conteudoCardController.retornarConteudo.bind(this))

server.listen(8081, function () {
    console.log('%s listening at %s', server.name, server.url);
});
