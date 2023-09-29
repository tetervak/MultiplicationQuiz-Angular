import { Component } from '@angular/core';
import {MultiplicationProblem} from "../multiplication-problem";
import {MultiplicationQuizService} from "../multiplication-quiz.service";

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.css', '../../assets/css/main.css']
})
export class InputErrorComponent {
  problem: MultiplicationProblem;
  userAnswer: string;
  constructor(quiz: MultiplicationQuizService) {
    this.problem = quiz.problem;
    this.userAnswer = quiz.userAnswer;
  }
}
