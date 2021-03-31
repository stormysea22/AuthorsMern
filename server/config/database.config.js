const mongoose = require('mongoose'),
    db = process.env.DB_URI;

mongoose.connect(`mongodb://localhost/${db}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}) 
    .then(() => console.log("You are in the mainframe"))
    .catch(err => console.log('Meltdown!', err))