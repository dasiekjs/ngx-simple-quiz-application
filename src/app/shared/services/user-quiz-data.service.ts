import {Injectable} from '@angular/core';
import {Quiz} from "../models/Quiz";
import {Observable, of} from "rxjs";
import {exampleQuiz} from "./mocked-question.service";
import {QuizQuestion} from "../models/QuizQuestion";

export interface UserAnswer {
  result: boolean;
  answer: string[];
}

@Injectable({
  providedIn: 'root'
})
export class UserQuizDataService {

  // Testing data
  userName: string = 'Dasiu';
  selectedQuiz: Quiz | null = exampleQuiz;
  questionsNum: number = exampleQuiz.questions.length;
  userAnswers: UserAnswer[] = [
    {
      answer: ["C"],
      result: true
    },
    {
      answer: ["A"],
      result: true
    },
    {
      answer: ["B", "A"],
      result: true
    }
  ];
//
//   userName: string = '';
//   selectedQuiz: Quiz | null = null;
//   questionsNum: number = 0;
//   userAnswers: UserAnswer[] = [];
//   questions: QuizQuestion[] = [];
  isCompleted: boolean = false;

  constructor() {
  }

  initUserData(userName: string, quiz: Quiz) {
    this.userName = userName;
    this.selectedQuiz = quiz;
    this.questionsNum = quiz.questions.length;
    this.userAnswers = [];
    this.isCompleted = false;
  }

  getCurrentQuiz(): Observable<Quiz> {
    return of(this.selectedQuiz as Quiz);
  }

  addAnswer(currentQuestion: QuizQuestion, answer: string[]) {
    const result = currentQuestion.isCorrectAnswer(answer);
    this.userAnswers.push({
      result,
      answer
    })
  }

  getProgress() {
    return [this.userAnswers.length, this.questionsNum]
  }

  quizInProgress(): boolean {
    return !!this.userName && !!this.selectedQuiz && !this.isCompleted;
  }
}
