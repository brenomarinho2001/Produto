var mongoose = require('mongoose');
// Modelo de Pedido >> 

module.exports = function(){
   var schema = mongoose.Schema({
       produto: {
           type: mongoose.Schema.ObjectId,
           ref: 'Produto'
       },
       usuario: {
            type: mongoose.Schema.ObjectId,
            ref: 'Usuario'
       },
       data: {
            type: Number,
            required: true
       },
       preço: {
            type: Number,
            required: true
       },
       formaDePagamento: {
            type: String,
            required: true
       },
       endereco: {
          type: String,
          required: true
     }
   });
   return mongoose.model('Pedido', schema);
}();