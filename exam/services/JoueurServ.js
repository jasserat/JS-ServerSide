const joueur = require ('../models/joueur')
const partie = require ('../models/partie')


// Add player
exports.addPlayer = (req, res, next) => {
    let newJoueur = new joueur({
        pseudo: req.body.pseudo,
        sante: req.body.sante,
        score: req.body.score
    });
    newJoueur.save((err, joueur) => {
        if (err) {
            res.json({ msg: 'Erreur dajout' });
        }
        else {
            res.json({ msg: 'Joueur ajouté avec succès' });
        }
    });
}

//get all players
exports.getAllPlayers = (req, res, next) => {
    joueur.find((err, joueurs) => {
        if (err) {
            res.json({ msg: 'Failed to get players' });
        }
        else {
            res.json(joueurs);
        }
    });
}

//Get player by id
exports.getPlayerById = (req, res, next) => {
    joueur.findById(req.params.id, (err, joueur) => {
        if (err) {
            res.json({ msg: 'Failed to get player' });
        }
        else {
            res.json(joueur);
        }
    });
}

//delete player
exports.deletePlayerById = (req, res, next) => {
    joueur.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
}

//attack player
exports.attaque = (req, res, next) => {
    joueur.updateOne({ _id: req.params.idatt }, { $inc: { score: 10 } }, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            joueur.updateOne({ _id: req.params.idvict }, { $inc: { sante: -20 } }, (err, result) => {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json(result);
                }
            });
        }
    });
}

//add partie
exports.addPartie = (req, res, next) => {
    let newPartie = new partie({
        nom: req.body.nom,
        joueur_1: req.body.joueur_1,
        joueur_2: req.body.joueur_2,
        etat: req.body.etat
    });
    newPartie.save((err, partie) => {
        if (err) {
            res.json({ msg: 'Failed to add partie' });
        }
        else {
            res.json({ msg: 'Partie added successfully' });
        }
    });
}
