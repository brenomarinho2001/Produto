let Produto = require('../models/produtosModel.js');

module.exports.mostrar_produtos = function (req, res){
    let promise =  Produto.find().populate("produto").exec();
    
    promise.then(
        function(produtos){
            res.status(200).json(produtos);
        }
    ).catch(
        function(error){
            res.status(501).json(error);
        }
    )
}
module.exports.inserir_produtos = function(req, res){
    // req.body é um objeto json
    console.log(req.body.senha)
    //Adicionar models para produtos
    let produto = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 10)
    })
    let promise = Produto.create(produto);
    promise.then(
        function(produto){
            res.status(201).json(produto);
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}
module.exports.remover_produto = function(req, res){
    let id = req.params.id;
    let token = req.headers.token
    let id_produto = jwt.decode(token).id_produto;

    if(id == id){
        let promise = Produto.findByIdAndDelete(id).exec();
        promise.then(
            function(){
                res.status(200).json("Produto Excluido!");
            }
        ).catch(
            function(error){
                res.status(401).json("Não autorizado");
            }
        )
    }else{
        res.status(401).json("error");
    }
}
