const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var joueur = new Schema({
    pseudo :{
        type: String
    },
    sante :{
        type: Number,
        default: 100
    },
    score :{
        type: Number,
        default: 0
    }

});

module.exports = mongoose.model('joueur',joueur)