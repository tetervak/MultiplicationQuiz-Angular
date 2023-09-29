import { Injectable } from '@angular/core';
import {MultiplicationProblem} from "./multiplication-problem";

@Injectable({
  providedIn: 'root'
})
export class MultiplicationProblemFactoryService {

  get randomMultiplicationProblem(): MultiplicationProblem {
    const problem = new MultiplicationProblem()
    problem.a = 1 + Math.floor(9 * Math.random());
    problem.b = 1 + Math.floor(9 * Math.random());
    problem.answer = problem.a * problem.b;
    return problem;
  }
}
