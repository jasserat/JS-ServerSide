const express = require('express');
const router = express.Router();
const profServ = require('../services/profServices');

router.post('/add', profServ.addProf);

router.get('/all', profServ.getAllProfs);

router.get('/all/:fullname', profServ.getProfsByFullname);

router.get('/allmail/:email', profServ.getProfsByEmail);

router.get('/allPar/:par', profServ.getProfsByFullnameOrEmailOrTelephone);

module.exports = router;