const Author = require("../models/author.model");

module.exports = {
    index: (req, res) => {
        Author.find()
            .then(data => res.json({ results:data }))
            .catch(err => res.status(404).json({errors:err.errors}))
    },

    create: (req, res) => {
        Author.create(req.body)
            .then(data => res.json({ results:data }))
            .catch(err => res.status(404).json({errors:err.errors}))
    },

    show: (req, res) => {
        Author.find({ _id:req.params.id })
            .then(data => res.json({ results:data }))
            .catch(err => res.status(404).json({errors:err.errors}))
    },

    update: (req, res) => {
        Author.updateOne({ _id: req.params.id }, req.body, { runValidators: true })
            .then(data => res.json({ results:data }))
            .catch(err => res.status(404).json({errors:err.errors}))
    },

    destroy: (req, res) => {
        Author.deleteOne({ _id: req.params.id }, (err, a) => {
            try {
                Author.find({}, (err, data) => {
                    try {
                        res.json({ results: data })
                    } catch (err) {
                        res.status(404).json({ errors: err.errors })
                    }
                })
            } catch(err) {
                res.status(404).json({ errors: err.errors })
            }
        })
    }
}