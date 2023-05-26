const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Professeur = new Schema({
    fullname: {
        type: String,
        required: [true, 'fullname is required'],
    },
    email: {
        type: String,
        required: [true, 'email is required'],
    },
    telephone: {
        type: Number,
        required: [true, 'telephone is required'],
        unique: [true, 'telephone must be unique']
    }
});

module.exports = mongoose.model('Professeur', Professeur);