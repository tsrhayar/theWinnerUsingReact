const express = require('express')
const { addCategory, allCategories, deleteCategory } = require('../controllers/categoryController')
const { requireSignIn, isAuth, isAdmin } = require('../middllwares/auth')
const { userById } = require('../middllwares/profile')
const { categotyByd } = require('../middllwares/categories')
const router = express.Router()

router.post('/add/:userId', [requireSignIn, isAuth, isAdmin], addCategory)
router.get('/allCategory', allCategories)
router.delete('/deleteC/:userId/:categoryById', [requireSignIn, isAuth, isAdmin], deleteCategory)

router.param('userId', userById)
router.param('categoryById', categotyByd)

module.exports = router

