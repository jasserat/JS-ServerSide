const express = require('express');
const router = express.Router();

var {addStudent, getAllStudents, getStudents, getStudent, getStudentByName, deleteStudent, updateStudent} = require('../services/studentS');

router.post('/add', addStudent);

router.get('/showall', getAllStudents);

router.get('/show', getStudents);

router.get('/show/:id', getStudent);

router.get('/showbyname/:name', getStudentByName);

router.delete('/remove/:id', deleteStudent);

router.put('/update/:id', updateStudent);

module.exports = router;