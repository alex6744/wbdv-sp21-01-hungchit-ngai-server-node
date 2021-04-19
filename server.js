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
mongoose.connect('mongodb+srv://roo1:1234@cluster0.16ia0.mongodb.net/whiteboard', {useNewUrlParser: true, useUnifiedTopology: true});
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require("./controllers/quizzes-controller")(app)
require("./controllers/questions-controller")(app)
require("./controllers/quiz-attempts-controller")(app)
app.listen(process.env.PORT || 3000,
    () => console.log("Server is running..."));