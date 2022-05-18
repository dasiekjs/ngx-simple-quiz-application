import { Component } from '@angular/core';
import {UserQuizDataService} from "../../../shared/services/user-quiz-data.service";

@Component({
  selector: 'app-quiz-progress',
  templateUrl: './quiz-progress.component.html',
  styleUrls: ['./quiz-progress.component.css']
})
export class QuizProgressComponent {


  constructor(private userQuizData: UserQuizDataService) { }

  get progress() {
    const [currentQuestion, maxQuestion] = this.userQuizData.getProgress();
    return {currentQuestion, maxQuestion};
  }

}
