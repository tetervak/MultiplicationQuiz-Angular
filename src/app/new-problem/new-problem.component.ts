import { Component } from '@angular/core';
import {MultiplicationProblem} from "../multiplication-problem";
import {MultiplicationQuizService} from "../multiplication-quiz.service";
import {Router} from "@angular/router";
import {navigate} from "../navigate";

@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css', '../../assets/css/main.css']
})
export class NewProblemComponent {
  problem: MultiplicationProblem;
  constructor(
    private quiz: MultiplicationQuizService,
    private readonly router: Router
  ) {
    quiz.nextProblem()
    this.problem = quiz.problem;
  }

  public check(userAnswer: string) {
    this.quiz.userAnswer = userAnswer;
    console.log('userAnswer=[' + userAnswer + ']');
    navigate(this.quiz.gradeQuiz(), this.router);
  }
}

