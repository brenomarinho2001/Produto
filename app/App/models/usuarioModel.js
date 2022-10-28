var mongoose = require('mongoose');
// Modelo de Usuario >> 

module.exports = function(){
   var schema = mongoose.Schema({
       nome: {
           type:String,
           required: true
       },
       email: {
            type: String,
            required: true
       },
       senha: {
            type: String,
            required: true
       },
       endereco: {
            type: mongoose.Schema.ObjectId,
            ref: 'Endereco'
       },
       senha: {
            type: mongoose.Schema.ObjectId,
            required: 'Pedido'
       }
   });
   return mongoose.model('Usuario', schema);
}();