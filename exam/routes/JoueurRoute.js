const express = require('express');
const router = express.Router();
const joueurServ = require ('../services/JoueurServ');

router.post('/newjoueur', joueurServ.addPlayer);

router.get('/getalljoueur', joueurServ.getAllPlayers);

router.get('/getjoueur/:id', joueurServ.getPlayerById);

router.delete('/deletejoueur/:id', joueurServ.deletePlayerById);

router.put('/attaque/:idatt/:idvict', joueurServ.attaque);

router.post('/newpartie', joueurServ.addPartie);

module.exports = router;