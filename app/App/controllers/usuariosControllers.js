let Usuario = require("../models/usuario.model.js");
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");

// Funções que vão tratar as requisições (USUARIOS)
// ja estão criadas no MongoDB
module.exports.listar_usuarios = function (req, res){
    let promise =  Usuario.find().populate("usuario").exec();
    
    promise.then(
        function(usuarios){
            res.status(200).json(view_usuario.renderMany(usuarios));
        }
    ).catch(
        function(error){
            res.status(501).json(error);
        }
    )
}

module.exports.inserir_usuario = function(req, res){
    // req.body é um objeto json
    console.log(req.body.senha)
    let usuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 10)
    })
    let promise = Usuario.create(usuario);
    promise.then(
        function(usuario){
            res.status(201).json(view_usuario.render(usuario));
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}
module.exports.remover_usuario = function(req, res){
    let id = req.params.id;
    let token = req.headers.token
    let id_usuario = jwt.decode(token).id_usuario;

    if(id == id){
        let promise = Usuario.findByIdAndDelete(id).exec();
        promise.then(
            function(){
                res.status(200).json("Usuario Excluido!");
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
