const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const questionSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        require: true
    },
    answers: [
        {
            CH1: {
                text: {
                    type: String,
                    required: true
                },
                isCorrect: {
                    type: Boolean,
                    required: true
                }
            },
            CH2: {
                text: {
                    type: String,
                    required: true
                },
                isCorrect: {
                    type: Boolean,
                    required: true
                }
            },
            CH3: {
                text: {
                    type: String,
                    required: true
                },
                isCorrect: {
                    type: Boolean,
                    required: true
                }
            },
            CH4: {
                text: {
                    type: String,
                    required: true
                },
                isCorrect: {
                    type: Boolean,
                    required: true
                }
            }
        }
    ]
}, {timestamps: true})

module.exports = mongoose.model('Question', questionSchema)
