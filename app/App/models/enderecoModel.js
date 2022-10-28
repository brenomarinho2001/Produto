var mongoose = require('mongoose');
// Modelo de Endereço >> 

module.exports = function(){
   var schema = mongoose.Schema({
       rua: {
           type:String,
           required: true
       },
       cidade: {
            type: String,
            required: true
       },
       estado: {
            type: String,
            required: true
       },
       cep: {
            type: Number,
            required: true
       },
       observacao: {
            type: String,
            required: true
       }
   });
   return mongoose.model('Endereco', schema);
}();