class CardContentController {

    retornarConteudo(req, res, next) {
        switch (req.params.tipoConteudo) {
            case "milho":
                const milho = require('./conteudo/milho.json');
                res.send(200, milho);
                break;
            case "cana":
                const cana = require('./conteudo/cana.json');
                res.send(200, cana);
                break;
            case "algodao":
                const algodao = require('./conteudo/algodao.json');
                res.send(200, algodao);
                break;
            case "soja":
                const soja = require('./conteudo/soja.json');
                res.send(200, soja);
                break;

            default:
                res.send(500, "Parametro Invalido");
                break;
        }
        next();
    }

    validaQRCOde(req, res, next) {
        if(req.params.qrCode==="qr_code_validado"){
            res.send(200, {mensagem : "Qr Code Valido"});
        }else{
            res.send(500, {mensagem : "Codigo Invalido"});
        }
        next();
    }

}

module.exports = new CardContentController();