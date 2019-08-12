
const mongoose = require('mongoose');
const uri = "mongodb+srv://anmol:anmolrastogi@cluster0-m2epa.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true});
mongoose.connection.once('open', function(){
    console.log('Connection has been made, now make fireworks...');
}).on('error', function(error){
    console.log('Connection error:', error);
});