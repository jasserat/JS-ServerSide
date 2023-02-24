const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Student = new Schema({
    Name: {type: String, required: true , unique: true},
    Age: {type: Number, required: false, unique: false},
    Note: {type: Number, required: false, unique: false}
});

module.exports = mongoose.model('students', Student);