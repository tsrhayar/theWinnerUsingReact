const Question = require('../models/questions')

exports.addQuestion = (req, res) => {
    const question = new Question(req.body)
    question.save((err, data) => {
        if(err) {
            return res.status(400).send(err)
        }
        return res.send(data)
    })
}

exports.getQuestion = (req, res) => {
    res.json({
        questions: req.questionsCat
    })
}

exports.getAllQuestion = (req, res) => {
    Question.find((err, question) => {
        if(err) {
            return res.status(400).send(err)
        }
        res.status(200).json(question)
    })
}
