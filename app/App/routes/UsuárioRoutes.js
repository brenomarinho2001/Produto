let controller_comentarios = require("../controllers/comentarios_controllers.js");
let controller_auth = require("../controllers/auth.controller.js");


module.exports = function (app){
    app.use("/comentarios", controller_auth.checar);
    // Listar os posts > endpoint (GET)
    app.get("/comentarios", controller_comentarios.listar_comentarios);
    // Encontrar posts po id > endpoint (GET by ID)
    app.get("/comentarios/:id",controller_comentarios.obter_comentarios);
    // adcionar comentarios > endpoint (POST)
    app.post("/comentarios", controller_comentarios.inserir_comentarios);
    // deletar post > endpoint (DELETE by ID)
     app.delete("/comentarios/:id", controller_comentarios.remover_comentarios);
}