const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Student = new Schema({
    Name: { type: String, required: true , unique: true },
    Age: {type: Number, required: true, unique: false}
});

module.exports = mongoose.model('students', Student);