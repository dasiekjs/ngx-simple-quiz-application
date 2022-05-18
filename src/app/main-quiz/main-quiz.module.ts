import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuizQuestionComponent} from './components/quiz-question/quiz-question.component';
import {QuizHolderComponent} from './components/quiz-holder/quiz-holder.component';
import {MainQuizRoutingModule} from "./main-quiz-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import { QuestionComponent } from './components/question/question.component';
import { QuizProgressComponent } from './components/quiz-progress/quiz-progress.component';
import { QuizSummaryComponent } from './components/quiz-summary/quiz-summary.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    QuizQuestionComponent,
    QuizHolderComponent,
    QuestionComponent,
    QuizProgressComponent,
    QuizSummaryComponent
  ],
  imports: [
    CommonModule,
    MainQuizRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class MainQuizModule {
}
