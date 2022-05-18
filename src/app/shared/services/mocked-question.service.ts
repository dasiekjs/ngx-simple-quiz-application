import { Injectable } from '@angular/core';
import {Quiz} from "../models/Quiz";
import {Observable, of} from "rxjs";
import {QuizQuestion} from "../models/QuizQuestion";

export const exampleQuiz: Quiz = {
  name: 'Test quiz',
  description: 'Lorem ipsum',
  questions: [
    new QuizQuestion(
      'Select C',
      'closed',
      'multiple',
      [
        {answer: 'A', isCorrect: true},
        {answer: 'B', isCorrect: true},
        {answer: 'C', isCorrect: true},
      ]
    ),
    new QuizQuestion(
      'Select A',
      'closed',
      'single',
      [
        {answer: 'A', isCorrect: true},
        {answer: 'B'},
        {answer: 'C'},
      ]
    ),
    new QuizQuestion(
      'Select B',
      'closed',
      'single',
      [
        {answer: 'A'},
        {answer: 'B', isCorrect: true},
        {answer: 'C'},
      ]
    ),
  ]
}

@Injectable({
  providedIn: 'root'
})
export class MockedQuestionService {

  constructor() { }

  getQuiz(): Observable<Quiz> {
    return of(exampleQuiz);
  }

  getAvailableQuizzes(): Observable<Quiz[]> {
    return of([exampleQuiz])
  }
}
