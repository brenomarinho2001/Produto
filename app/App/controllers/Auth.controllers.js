let Usuario = require('../models/usuario.model.js');
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
const { JsonWebTokenError } = require("jsonwebtoken");

// POST/usuarios/signin
module.exports.logar = function(req, res){
    let email = req.body.email;
    let senha_requisicao = req.body.senha;
    let promise = Usuario.findOne({"email": email})
    .then(
        function(usuario){
            if(bcrypt.compareSync(senha_requisicao, usuario.senha)){
                let token = jwt.sign({
                    id_usuario: usuario._id,
                    nome: usuario.nome
                },"VERTER2022")
                res.status(200).json({token: token, nome: usuario.nome});
            }else {
                res.status(401).send("credenciais erradas!")
        }
    }).catch(
        function(error){
            res.status(401).send("não credenciadas!")
        }
    )
}
// token
module.exports.checar = function(req, res, next){
    let token = req.headers.token;
    jwt.verify(token, "VERTER2022", function(err, decoded){
        if(err){
            res.status(401).json("Token inválido!");
        }else{
        next();
        }
    })
};