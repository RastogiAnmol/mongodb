const assert = require('assert');
const MarioChar = require('../models/mariochar');
describe('Removing records', function () {

    it('saves a record Luigi2 to the DB which you will delete in the next test', function (done) {
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

    it('removes a record from the DB', function (done) {
        MarioChar.findOneAndRemove({ name: 'Luigi2' }).then((result) => {
            console.log('************The record has been deleted************');
            console.log('returned value is => ', result);

            // Verify if the record is deleted or not
            MarioChar.findOne({name: 'Luigi2'}).then((result) => {
                assert(result === null)
                done();
            });
        });
    });
});