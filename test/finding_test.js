const assert = require('assert');
const MarioChar = require('../models/mariochar');
describe('Finding records', function () {

    it('Finds a record in the DB', function (done) {
        MarioChar.findOne({ name: 'Mario' }).then((result) => {

            assert(result.name === 'Mario')
            done();
        });
    });
});