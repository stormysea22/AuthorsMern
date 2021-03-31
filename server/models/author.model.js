const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [3, true, "Name longer than three characters is required"]
    },
    quote: {
        type: String,
        required: [3, true, ""]
    }
}, { timestamps: true })

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
    