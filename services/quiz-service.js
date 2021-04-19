// const quizzes = require('./quizzes.json')
// const quizzesModel=require("../db/models/quizzes/quizzes-model")

const quizzesDao=require("../db/daos/quizzes-dao")


const createQuiz=()=>{}
const updateQuiz=()=>{}
const deleteQuiz=()=>{}
const findAllQuizzes = () => {
    //return quizzesModel.find()
    return quizzesDao.findAllQuizzes()
}
const findQuizById = (quizId) =>
    // quizzes.find(quiz => quiz._id === quizId)
    // quizzesModel.findById(quizId)
    //     .populate("questions")
    //     .exec()
    quizzesDao.findQuizById(quizId)

module.exports = {
    findAllQuizzes,
    findQuizById,
    createQuiz,
    deleteQuiz,
    updateQuiz
}
