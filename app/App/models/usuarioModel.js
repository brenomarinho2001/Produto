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
       endereco: {
            type: mongoose.Schema.ObjectId,
            ref: 'Endereco'
       },
       senha: {
          type: String,
          required: true
       }
   });
   return mongoose.model('Usuario', schema);
}();