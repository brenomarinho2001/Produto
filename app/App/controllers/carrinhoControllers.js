let Carrinho = require("../models/carrinhoModel.js");

// Funções que vão tratar as requisições (CARRINHO)
// ja estão criadas no MongoDB
module.exports.mostrar_carrinho = function (req, res){
    let promise =  Carrinho.find().populate("carrinho").exec();
    
    promise.then(
        function(carrinho){
            res.status(200).json(carrinho);
        }
    ).catch(
        function(error){
            res.status(501).json(error);
        }
    )
}