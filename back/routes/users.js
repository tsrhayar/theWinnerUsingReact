const express = require('express')
const {signup, signin, signout, allUser} = require('../controllers/userController')
const {userSignUpValidator, userSignInValidator} = require('../middllwares/userValidator')
const {requireSignIn} = require('../middllwares/auth')
const router = express.Router()

router.post('/signup', userSignUpValidator, signup)
router.post('/signin', userSignInValidator, signin)
router.post('/signout', signout)
router.get('/all', allUser)

router.get('/test', requireSignIn, (req, res) => {
    res.send({myName: "yassine"})
})

module.exports = router

