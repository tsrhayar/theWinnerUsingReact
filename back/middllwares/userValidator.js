exports.userSignUpValidator = (req, res, next) => {
    req.check('name', 'name is required').notEmpty().withMessage('user name is required')
    req.check('email', 'email is required').notEmpty().isEmail().withMessage('enter a valid email')
    req.check('password', 'the password is required').notEmpty().isLength({min: 10}).withMessage('password must contain at less 10 character')

    const errors = req.validationErrors()

    if(errors) {
        // const arrayError = errors.map(errorList => {
        //     return errorList.msg
        // })
        return res.status(400).json({error: errors[0].msg})
    }
    next()
}

exports.userSignInValidator = (req, res, next) => {
    req.check('email', 'email is required').notEmpty().isEmail().withMessage('enter a valid email')
    req.check('password', 'the password is required').notEmpty().isLength({min: 10}).withMessage('password must contain at less 10 character')

    const errors = req.validationErrors()

    if(errors) {
        // const arrayError = errors.map(errorList => {
        //     return errorList.msg
        // })
        return res.status(400).json({error: errors[0].msg})
    }
    next()
}