const express = require('express');
const { route } = require('express/lib/application');
let route_usuarios = require('../app/routes/usuario.route');
let route_posts = require('../app/routes/post.route');
let route_comentarios = require('../app/routes/comentario.route');

function setup(){
    let app = express();
    app.set("port", 3001);
    app.use(express.json());
    app.use(express.urlencoded({ extended: false}));
    app.use(express.static('./public'));
    route_usuarios(app);
    route_posts(app);
    route_comentarios(app);
    return app;
}

module.exports.setup = setup