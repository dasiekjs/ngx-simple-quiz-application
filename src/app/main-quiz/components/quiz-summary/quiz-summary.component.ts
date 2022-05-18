import { Component, OnInit } from '@angular/core';
import {UserAnswer, UserQuizDataService} from "../../../shared/services/user-quiz-data.service";
import {Quiz} from "../../../shared/models/Quiz";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-quiz-summary',
  templateUrl: './quiz-summary.component.html',
  styleUrls: ['./quiz-summary.component.css']
})
export class QuizSummaryComponent implements OnInit {

  userAnswers: UserAnswer[] = [];
  success: boolean = false;
  userName: string = '';
  quiz: Quiz | null = null;

  form: FormGroup | null = null;

  constructor(private userQuizData: UserQuizDataService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.quiz = this.userQuizData.selectedQuiz;
    this.userAnswers = this.userQuizData.userAnswers;
    this.userName = this.userQuizData.userName;

    this.form = this.fb.group({
      questions: this.fb.array([])
    });

    this.userAnswers.forEach((value, index) => {
      const element = this.fb.group({
        answer: [value.answer]
      });
      element.setErrors(Validators.required);
      element.disable();
      this.questions.push(element);
    })
  }

  get questions() {
    return this.form?.controls["questions"] as FormArray;
  }

}
