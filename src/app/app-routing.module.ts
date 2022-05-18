import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HasQuizInProgressGuard} from "./shared/guards/has-quiz-in-progress.guard";

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule),
  },
  {
    path: 'quiz',
    loadChildren: () => import('./main-quiz/main-quiz.module').then(m => m.MainQuizModule),
    canActivate: [HasQuizInProgressGuard]
  },
  {
    path: '**',
    redirectTo: '/welcome'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
