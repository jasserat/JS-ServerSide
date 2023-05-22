const express = require('express');
const student = require('../models/student');
// const router = express.Router();

module.exports.addStudent = (req, res) => {
    var Student = new student(req.body);
    Student.save((err, data) => {
        if (err) {
            res.status(500).send({ message: err.message || "Some error occurred while creating the Student." });
        } else {
            res.send(data);
        }
    });
};

module.exports.getAllStudents = (req, res) => {
    student.find((err, data) => {
        if (err) {
            res.status(500).send({ message: err.message || "Some error occurred while retrieving students." });
        } else {
            res.json(data);
        }
    });
};

module.exports.getStudentsAgeSup18 = (req, res) => {
    student.find({Age:{$gte:18}},(err, data) => {
        if (err) {
            res.status(500).send({ message: err.message || "Some error occurred while retrieving students." });
        } else {
            res.json(data);
        }
    });
};

module.exports.getStudentsNameSort = (req, res) => {
    student.find({Note:{$gte:10}}).sort({Name:1}).exec((err, data) => {
        if (err) {
            res.status(500).send({ message: err.message || "Some error occurred while retrieving students." });
        } else {
            res.json(data);
        }
    });
};

module.exports.getStudent = (req, res) => {
    student.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === 'ObjectId') {
                res.status(404).send({ message: "Student not found with id " + req.params.id });
            }
            return res.status(500).send({ message: "Error retrieving student with id " + req.params.id });
        }
        if (!data) {
            return res.status(404).send({ message: "Student not found with id " + req.params.id });
        }
        res.send(data);
    });
};

module.exports.getStudentByName = (req, res) => {
    student.find({ Name: req.params.name }, (err, data) => {
        if (err) {
            if (err.kind === 'ObjectId') {
                res.status(404).send({ message: "Student not found with name " + req.params.name });
            }
            return res.status(500).send({ message: "Error retrieving student with name " + req.params.name });
        }
        if (!data) {
            return res.status(404).send({ message: "Student not found with name " + req.params.name });
        }
        res.send(data);
    });
};

module.exports.deleteStudent = (req, res) => {
    student.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                res.status(404).send({ message: "Student not found with id " + req.params.id });
            }
            return res.status(500).send({ message: "Could not delete student with id " + req.params.id });
        }
        res.send({ message: "Student deleted successfully!" });
    });
};

module.exports.updateStudent = (req, res) => {
    student.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, data) => {
        if (err) {
            if (err.kind === 'ObjectId') {
                res.status(404).send({ message: "Student not found with id " + req.params.id });
            }
            return res.status(500).send({ message: "Error updating student with id " + req.params.id });
        }
        if (!data) {
            return res.status(404).send({ message: "Student not found with id " + req.params.id });
        }
        res.send(data);
    });
};

module.exports.findByIdAndSortByNote = (req, res) => {
    student.findById(req.params.id).sort({Note:1}).exec((err, data) => {
        if (err) {
            if (err.kind === 'ObjectId') {
                res.status(404).send({ message: "Student not found with id " + req.params.id });
            }
            return res.status(500).send({ message: "Error retrieving student with id " + req.params.id });
        }
        if (!data) {
            return res.status(404).send({ message: "Student not found with id " + req.params.id });
        }
        res.send(data);
    });
};

//check if a student exists by name it returns true or false
module.exports.checkStudent = (req, res) => {
    student.find({ Name: req.params.name }, (err, data) => {
        if (err) {
            if (err.kind === 'ObjectId') {
                res.send(false);
            }
            return res.send(false);
        }
        if (!data) {
            return res.send(false);
        }
        res.send(true);
    });
};


// module.exports = {addStudent, getAllStudents, getStudents, getStudentsNameSort, getStudent, getStudentByName, deleteStudent, updateStudent};