const questionService=require("../services/questions-service")
module.exports=(app)=>{

    const findAllQuestions=(req,res)=>{
        const questions=questionService.findAllQuestions()
        res.send(questions)
    }
    const findQuestionsForQuiz=(req,res)=>{
        const quizId=req.params.qzid;
        const questions=questionService.findAllQuestionsForQuiz(quizId);
        res.send(questions)

    }
    app.get("/api/questions",findAllQuestions);
    app.get("/api/quizzes/:qzid/questions",findQuestionsForQuiz)
}