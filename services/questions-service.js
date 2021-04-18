const questions = require('./questions.json')
const questionsModel=require("../db/quesstions/questions-model")
const createQuestion=()=>{}
const createQuestionForQuiz=()=>{}
const findAllQuestions=()=>{
    //return questions
    return questionsModel.find()
}
const findAllQuestionsForQuiz=(qzid)=>{
    // return questions.filter((question)=>{
    //     return question.quizId===qzid;
    // })
    return questionsModel.find({quizId:qzid})
}
const findQuestionById=(qid)=>{
    // return questions.find((question)=>{
    //     return question._id===qid
    // })
    return questionsModel.findById(qid)
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
    findAllQuestionsForQuiz
}
