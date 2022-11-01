var mongoose = require('mongoose');
// Modelo de Carrinho >> 

module.exports = function(){
   var schema = mongoose.Schema({
       produto: {
            type: mongoose.Schema.ObjectId,
            ref: 'Produto'
       },
       valor: {
           type:Number,
           required: true
       },
   });
   return mongoose.model('Carrinho', schema);
}();