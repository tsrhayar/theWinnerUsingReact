const Question = require('../models/questions')

exports.questionById = (req, res, next, id) => {
    Question.find({category: id}).exec((err, result) => {
        if(err || !result) {
            return res.status(404).json({
                error: "Questions Category Not found"
            })
        }
        req.questionsCat = result
        next()
    })
}

