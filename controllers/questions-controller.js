const questionService=require("../services/questions-service")
module.exports=(app)=>{

    const findAllQuestions=(req,res)=>{
        // const questions=questionService.findAllQuestions()
        // res.send(questions)
        questionService.findAllQuestions()
            .then((questions)=>{
                res.send(questions)
            })
    }
    const findQuestionsForQuiz=(req,res)=>{
        const quizId=req.params.qzid;
        // const questions=questionService.findAllQuestionsForQuiz(quizId);
        // res.send(questions)
        questionService.findQuestionsForQuiz(quizId)
            .then((questions)=>{
                res.send(questions)
            })

    }
    const findQuestionById=(req,res)=>{
        const quizId=req.params.qid;
        questionService.findQuestionById(quizId)
            .then(question=>res.send(question))

    }
    app.get("/api/questions",findAllQuestions);
    app.get("/api/quizzes/:qzid/questions",findQuestionsForQuiz)
    app.get("/api/questions/:qid/",findQuestionById)
}