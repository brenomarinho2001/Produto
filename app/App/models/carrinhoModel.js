var mongoose = require('mongoose');


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