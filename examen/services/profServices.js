const prof = require('../models/professeur');

//add new prof fullname must be under 8 chars, email must be valid and telephone must be a number of 8 digits
exports.addProf = (req, res, next) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (req.body.fullname.length > 8) {
        res.status(400).json({
            message: 'fullname must be under 8 chars'
        });
    } else if (!emailRegex.test(req.body.email)) {
        res.status(400).json({
            message: 'email must be valid'
        });
    } else if (req.body.telephone.toString().length !== 8) {
        res.status(400).json({
            message: 'telephone must be a number of 8 digits'
        });
    } else {
        const professeur = new prof({
            fullname: req.body.fullname,
            email: req.body.email,
            telephone: req.body.telephone
        });
        professeur.save().then(result => {
            res.status(201).json({
                message: 'prof added successfully',
                prof: result
            });
        }).catch(err => {
            res.status(500).json({
                error: err
            });
        });
    }
}

//get all profs in the database and sort them by fullname
exports.getAllProfs = (req, res, next) => {
    prof.find().sort({ fullname: 1 }).then(result => {
        res.status(200).json({
            profs: result
        });
    }).catch(err => {
        res.status(500).json({
            error: err
        });
    });
}

//get profs by fullname
exports.getProfsByFullname = (req, res, next) => {
    prof.find({ fullname: req.params.fullname }).then(result => {
        res.status(200).json({
            profs: result
        });
    }).catch(err => {
        res.status(500).json({
            error: err
        });
    });
}

//get profs by email
exports.getProfsByEmail = (req, res, next) => {
    prof.find({ email: req.params.email }).then(result => {
        res.status(200).json({
            profs: result
        });
    }).catch(err => {
        res.status(500).json({
            error: err
        });
    });
}

//get profs by fullname or email or telephone
exports.getProfsByFullnameOrEmailOrTelephone = (req, res, next) => {
    console.log("par:",req.params.par);
    prof.find({ $or: [{ fullname: req.params.par }, { email: req.params.par }, { telephone: req.params.par }] }).then(result => {
        res.status(200).json({
            profs: result
        });
    }).catch(err => {
        res.status(500).json({
            error: err
        });
    });
}

//update prof by id
exports.updateProfById = (req, res, next) => {
    prof.updateOne({ _id: req.params.id }, { $set: req.body }).then(result => {
        res.status(200).json({
            message: 'prof updated successfully'
        });
    }).catch(err => {
        res.status(500).json({
            error: err
        });
    });
}

//update prof by email
exports.updateProfByEmail = (req, res, next) => {
    prof.updateOne({ email: req.params.email }, { $set: req.body }).then(result => {
        res.status(200).json({
            message: 'prof updated successfully'
        });
    }).catch(err => {
        res.status(500).json({
            error: err
        });
    });
}

//delete prof by id
exports.deleteProfById = (req, res, next) => {
    prof.deleteOne({ _id: req.params.id }).then(result => {
        res.status(200).json({
            message: 'prof deleted successfully'
        });
    }).catch(err => {
        res.status(500).json({
            error: err
        });
    });
}

//delete prof by email
exports.deleteProfByEmail = (req, res, next) => {
    prof.deleteOne({ email: req.params.email }).then(result => {
        res.status(200).json({
            message: 'prof deleted successfully'
        });
    }).catch(err => {
        res.status(500).json({
            error: err
        });
    });
}

