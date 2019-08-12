const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* 1)-We have created a model so that each time a user creates an object of Mario then he should be able to
** save it in to MongoDB
** 2)-Every model is based on a schema which tells about the datatype and fields that a particular collection
** of our DB expects
*/
const MarioCharSchema = new Schema({
name: String,
weight: Number
});

const MarioChar = mongoose.model('mariochar',MarioCharSchema);
module.exports = MarioChar;