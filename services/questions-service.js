// const questions = require('./questions.json')
// const questionsModel=require("../db/models/quesstions/questions-model")
const questionsDao=require("../db/daos/questions-dao")
const createQuestion=()=>{}
const createQuestionForQuiz=()=>{}
const findAllQuestions=()=>{
    //return questions
   // return questionsModel.find()
    return questionsDao.findAllQuestions()
}
const findQuestionsForQuiz=(qzid)=>{
    // return questions.filter((question)=>{
    //     return question.quizId===qzid;
    // })
    //return questionsModel.find({quizId:qzid})
    return questionsDao.findQuestionsForQuiz(qzid)
}
const findQuestionById=(qid)=>{
    // return questions.find((question)=>{
    //     return question._id===qid
    // })
    //return questionsModel.findById(qid)
    return questionsDao.findQuestionById(qid)
}
const updateQuestion=()=>{}
const deleteQuestion=()=>{}

module.exports = {
    createQuestion,
    findAllQuestions,
    findQuestionById,
    updateQuestion,
    deleteQuestion,
    createQuestionForQuiz,
    findQuestionsForQuiz
}
