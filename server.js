const express = require('express')
const app = express()

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/whiteboard-01', {useNewUrlParser: true, useUnifiedTopology: true});

require("./controllers/quizzes-controller")(app)
require("./controllers/questions-controller")(app)
app.listen(process.env.PORT || 3000,
    () => console.log("Server is running..."));