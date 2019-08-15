const assert = require('assert');
const MarioChar = require('../models/mariochar');
describe('some demo test', function () {

    // create tests
    it('adds two numbers', function () {
        assert(2 + 3 == 5)
    })
    // done parameter is used to tell mocha that our test is complete and it can continue to new test present below
    it('saves a record to the DB', function (done) {
        var record = new MarioChar({
            name: 'Mario',
            weight: 40
        });
        record.save().then(()=>{
            /* record.isNew === false when data is saved to DB
            ** record.isNew === true , it remains true until data is saved to DB
            */
           console.log('the Id of saved record is', record._id.toString());
            assert(record.isNew === false);
            done();
        });
    })
    it('saves another record to the DB', function (done) {
        var record = new MarioChar({
            name: 'Luigi',
            weight: 40
        });
        record.save().then(()=>{
            /* record.isNew === false when data is saved to DB
            ** record.isNew === true , it remains true until data is saved to DB
            */
            assert(record.isNew === false);
            done();
        });
    })
    it('saves another record to the DB', function (done) {
        var record = new MarioChar({
            name: 'Luigi2',
            weight: 50
        });
        record.save().then(()=>{
            /* record.isNew === false when data is saved to DB
            ** record.isNew === true , it remains true until data is saved to DB
            */
            assert(record.isNew === false);
            done();
        });
    })
})