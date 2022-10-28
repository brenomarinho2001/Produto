var mongoose = require('mongoose');
// Modelo de Produto >> 

module.exports = function(){
   var schema = mongoose.Schema({
       nome: {
           type:String,
           required: true
       },
       descricao: {
            type: String,
            required: true
       },
       foto: {
            type: String,
            required: true
       },
       valor: {
            type: Number,
            required: true
       },
       categoria: {
            type: String,
            required: true
       }
   });
   return mongoose.model('Produto', schema);
}();