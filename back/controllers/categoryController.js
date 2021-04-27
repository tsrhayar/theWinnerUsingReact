const Category = require('../models/categories')
const Question = require('../models/questions')

exports.addCategory = (req, res) => {
    const category = new Category(req.body)
    category.save((err, data) => {
        if(err) {
            return res.status(400).send(err)
        }
        res.send(data)
    })
}

exports.allCategories = (req, res) => {
    Category.find((err, data) => {
        if(err) {
           return res.status(400).send(err)
        }
        return res.status(200).json(data)
    })
}

exports.deleteCategory = (req, res, next) => {
    let category = req.category
    category.remove((err, data) => {
        if(err) {
            return res.status(400).json({
                error: "category not found"
            })
        }
        console.log(category._id)
        res.status(204).json({})
        next()
    })

    Question.remove({category: category._id}, (err, data) => {
        if(err) {
            return res.status(400).json({
                error: "question not found"
            })
        }
        res.status(204).json({})
    })
}
