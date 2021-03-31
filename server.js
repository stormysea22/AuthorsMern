require('dotenv').config();
const express = require("express"),
    app = express(),
    port = process.env.PORT,
    cors = require('cors'),
    server = app.listen(port, () => console.log(`listening on port ${port}`))
const logger = require('morgan');




app.use(cors(), express.json(), express.urlencoded({ extended: true }));
app.use(logger('dev'));


require('./server/config/database.config');
require('./server/routes/author.routes')(app);