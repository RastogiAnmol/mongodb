
const mongoose = require('mongoose');
const uri = "mongodb+srv://anmol:anmolrastogi@cluster0-m2epa.mongodb.net/test?retryWrites=true&w=majority";

// Connect to the DB before running any test
// run this once before any test executes
before((done) => {
mongoose.connect(uri, {useNewUrlParser: true, useFindAndModify: false});
mongoose.connection.once('open', function(){
    console.log('Connection has been made...............');
    mongoose.connection.collections.mariochars.drop(() =>{
        console.log('Old DB dropped');
        done();
    });
}).on('error', function(error){
    console.log('Connection error:', error);
});
});

// run this before each test
beforeEach(() => {
console.log('running the test........');
});
after((done) => {
    mongoose.connection.close(() => {
        console.log('connection closed');
    });
    done();
})