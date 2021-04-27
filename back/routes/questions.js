const express = require('express')
const { addQuestion, getQuestion,getAllQuestion } = require('../controllers/questionController')
const { requireSignIn, isAuth, isAdmin } = require('../middllwares/auth')
const { userById } = require('../middllwares/profile')
const { questionById } = require('../middllwares/questions')

const router = express.Router()

router.post('/add/:userId', [requireSignIn, isAuth, isAdmin], addQuestion)
router.get('/findCat/:questionCat', getQuestion)
router.get('/findCat', getAllQuestion)

router.param('userId', userById)
router.param('questionCat', questionById)

module.exports = router

