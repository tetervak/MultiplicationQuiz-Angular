import { Injectable } from '@angular/core';
import {MultiplicationProblemFactoryService} from "./multiplication-problem-factory.service";
import {MultiplicationProblem} from "./multiplication-problem";
import {Grade} from "./grade";

@Injectable({
  providedIn: 'root'
})
export class MultiplicationQuizService {

  problem: MultiplicationProblem
  userAnswer: string;

  constructor(
    private problemFactory: MultiplicationProblemFactoryService
  ) {
    this.problem = problemFactory.randomMultiplicationProblem
    this.userAnswer = '';
  }

  nextProblem(){
    this.problem = this.problemFactory.randomMultiplicationProblem
    this.userAnswer = '';
  }

  gradeQuiz(): Grade {
    if (this.userAnswer === '') {
      this.userAnswer = 'empty';
      return Grade.InputError;
    }
    const parsed = parseFloat(this.userAnswer);
    if (isNaN(parsed)) {
      return Grade.InputError;
    } else {
      if (parsed === this.problem.answer) {
        return Grade.RightAnswer;
      } else {
        return Grade.WrongAnswer;
      }
    }
  }
}
