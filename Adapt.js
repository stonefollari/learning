





class Adapt{
  
    constructor(){

        this.problem;
        this.answer;

        this.correct;
        this.feedback;
        this.paths;
        this.data;
    }

    setProblem( problemObj ){
        this.problem = problemObj;
    }
    setAnswer( answerObj){
        this.answer = answerObj;
    }

    create(){
        return this.problem.create() + this.answer.create();
    }


}