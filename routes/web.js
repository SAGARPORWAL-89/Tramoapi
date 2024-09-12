const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

//userController
router.get('/getAlluser', userController.getAllUser)
router.post('/student', userController.student)
router.get('/studentFind/:id', userController.studentFind)
router.delete('/studentdelete/:id', userController.studentDataDelete)
router.patch('/studentupdate/:id', userController.studentUpdate)


module.exports = router