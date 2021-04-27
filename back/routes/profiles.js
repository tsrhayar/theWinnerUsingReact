const express = require('express')
const {getOneUser} = require('../controllers/profileController')
const { userById } = require('../middllwares/profile')
const { requireSignIn, isAuth, isAdmin } = require('../middllwares/auth')

const router = express.Router()

router.get('/:userId', requireSignIn, isAuth, isAdmin, getOneUser)

router.param('userId', userById)

module.exports = router

