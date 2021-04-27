const Category = require('../models/categories')

exports.categotyByd = (req, res, next, id) => {
    Category.findById(id).exec((err, data) => {
        if(err || !data) {
            return res.status(404).json({
                error: "category not found !"
            })
        }
        req.category = data;
        next()
    })
}
