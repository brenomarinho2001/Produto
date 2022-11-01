let Pedido = require("../models/pedidoModel.js");

module.exports.mostrar_pedido = function (req, res){
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

module.exports.listar_pedido = function (req, res){
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