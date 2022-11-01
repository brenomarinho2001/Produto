let Endereco = require("../models/enderecoModel.js");


//AJEITARR ENDERECO

module.exports.inserir_endereco = function(req, res){
    // req.body é um objeto json
    console.log(req.body.senha)
    //Adicionar models para produtos
    let endereco = new Endereco({
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



module.exports.remover_endereco = function(req, res){
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
