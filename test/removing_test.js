const assert = require('assert');
const MarioChar = require('../models/mariochar');
describe('sFinding records', function () {

    it('removes a record in the DB', function (done) {
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