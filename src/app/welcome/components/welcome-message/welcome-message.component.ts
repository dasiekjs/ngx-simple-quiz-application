import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {UserQuizDataService} from "../../../shared/services/user-quiz-data.service";
import {MockedQuestionService} from "../../../shared/services/mocked-question.service";
import {Quiz} from "../../../shared/models/Quiz";

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.css']
})
export class WelcomeMessageComponent implements OnInit {

  form: FormGroup;
  availableQuizzes: Quiz[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private quizService: MockedQuestionService,
    private userQuizData: UserQuizDataService) {
    this.form = this.fb.group({
      name: [],
      selectedQuiz: []
    })
  }

  ngOnInit(): void {
    this.quizService.getAvailableQuizzes()
      .subscribe((data) => {
        this.availableQuizzes = data;
      })
  }

  enterQuiz() {
    const {name, selectedQuiz} = this.form.value;

    this.userQuizData.initUserData(name, selectedQuiz);
    this.router.navigate(['quiz'])
  }
}
