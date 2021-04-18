const quizzes = require('./quizzes.json')
const quizzesModel=require("../db/models/quizzes/quizzes-model")


const createQuiz=()=>{}
const updateQuiz=()=>{}
const deleteQuiz=()=>{}
const findAllQuizzes = () => {
    return quizzesModel.find()
}
const findQuizById = (quizId) =>
    // quizzes.find(quiz => quiz._id === quizId)
    quizzesModel.findById(quizId)
        .populate("questions")
        .exec()

module.exports = {
    findAllQuizzes,
    findQuizById,
    createQuiz,
    deleteQuiz,
    updateQuiz
}
