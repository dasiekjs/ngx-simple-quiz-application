import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuizHolderComponent} from "./components/quiz-holder/quiz-holder.component";
import {QuizSummaryComponent} from "./components/quiz-summary/quiz-summary.component";

const routes: Routes = [
  {
    path: '',
    component: QuizHolderComponent
  },
  {
    path: 'summary',
    component: QuizSummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainQuizRoutingModule { }
