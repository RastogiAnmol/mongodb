const assert = require('assert');
const MarioChar = require('../models/mariochar');
describe('Updating records', function () {

    it('saves a record in the DB', function (done) {
        var record = new MarioChar({
            name: 'MarioUpdate',
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

    it('updates a record in the DB', function (done) {
        MarioChar.findOneAndUpdate({ name: 'MarioUpdate' },{name: 'Gilahru'}).then((result) => {
            console.log('************The record has been updated************');
            console.log('returned value is => ', result);

            // Verify if the record is updated or not
            MarioChar.findOne({name: 'Gilahru'}).then((result) => {
                assert(result.name === 'Gilahru');
                done();
            });
        });
    });

    it('Multiplies all records weight by 2 in the DB', function (done) {
        MarioChar.update({},{$mul:{weight: 2}},{ multi: true }).then((result) => {
            console.log('************All records have been updated************');

            // Verify if the record is updated or not
            MarioChar.findOne({name: 'Gilahru'}).then((result) => {
                assert(result.weight%2 == 0);
                done();
            });
        });
    });
});