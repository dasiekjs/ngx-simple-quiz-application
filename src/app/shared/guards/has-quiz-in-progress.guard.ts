import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserQuizDataService} from "../services/user-quiz-data.service";

@Injectable({
  providedIn: 'root'
})
export class HasQuizInProgressGuard implements CanActivate {

  constructor(private userQuizDataService: UserQuizDataService, public router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const result =  this.userQuizDataService.quizInProgress();
    if (!result) {
      this.router.navigate(['welcome']);
    }

    return result;
  }

}
