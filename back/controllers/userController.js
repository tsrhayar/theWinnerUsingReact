const User = require('../models/user')
const jwt = require('jsonwebtoken')

exports.signup = (req, res) => {
    if(req.body.confirmPass !== req.body.password || !req.body.confirmPass) {
        return res.status('400').json({error: "the password dosn't match"})
    }

    const user = new User(req.body)

    user.save((err, user) => {
        if(err) {
            return res.status('400').json({error: "this email is already existe"})
        }
        user.hashed_password = undefined
        user.salt = undefined

        res.send(user)
    })
}

exports.signin = (req, res) => {
    const {email, password} = req.body

    User.findOne({email}, (err, user) => {
        if(err || !user) {
            return res.status(400).json({error: "user not found ith this email, please sign up"})
        }
        if(!user.authenticate(password)) {
            return res.status(401).json({error: 'Email and password d\'ont match !'})
        }

        const token = jwt.sign({_id: user._id, role: user.role}, process.env.JWT_SECRET);

        res.cookie('token', token, {expire: new Date() + 84566565})

        const { _id, name, email, role} = user;

        return res.json({
            token, user: {_id, name, email, role}
        })
    })
}

exports.allUser = (req, res) => {
    User.find((err, user) => {
        if(err) {
            return res.status(400).send(err)
        }
        res.status(200).json(user)
    })
}

exports.signout = (req, res) =>  {
    res.clearCookie('token');

    res.json({
        message: "user signout"
    })
}


