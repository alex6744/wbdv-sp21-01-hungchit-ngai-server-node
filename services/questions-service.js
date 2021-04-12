const questions = require('./questions.json')
const createQuestion=()=>{}
const createQuestionForQuiz=()=>{}
const findAllQuestions=()=>{
    return questions
}
const findAllQuestionsForQuiz=(qzid)=>{
    return questions.filter((question)=>{
        return question.quizId===qzid;
    })
}
const findQuestionById=(qid)=>{
    return questions.find((question)=>{
        return question._id===qid
    })
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
