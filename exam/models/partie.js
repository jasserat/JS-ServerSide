const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Partie = new Schema({
    nom:{
        type:String
    },
    joueur_1: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "joueurs",
    },
    joueur_2: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "joueurs",
    },
    etat:{
        type: String,
        default:"en cours"
    }
})

module.exports= mongoose.model('partie',Partie)