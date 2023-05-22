const express = require('express');
const router = express.Router();
const studentS = require('../services/studentS');

// var {addStudent, getAllStudents, getStudents, getStudentsNameSort, getStudent, getStudentByName, deleteStudent, updateStudent} = require('../services/studentS');

router.post('/add', studentS.addStudent);

router.get('/showall', studentS.getAllStudents);

router.get('/showsup18',studentS.getStudentsAgeSup18);

router.get('/showsort', studentS.getStudentsNameSort);

router.get('/show/:id', studentS.getStudent);

router.get('/showbyname/:name', studentS.getStudentByName);

router.delete('/remove/:id', studentS.deleteStudent);

router.put('/update/:id', studentS.updateStudent);

router.get('/checkname/:name', studentS.checkStudent);




module.exports = router;