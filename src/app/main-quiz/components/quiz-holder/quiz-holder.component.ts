import {Component, OnInit} from '@angular/core';
import {Quiz} from "../../../shared/models/Quiz";
import {BehaviorSubject, finalize, mergeMap, Subject, takeUntil, tap} from "rxjs";
import {QuizQuestion} from "../../../shared/models/QuizQuestion";
import {UserQuizDataService} from "../../../shared/services/user-quiz-data.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-quiz-holder',
  templateUrl: './quiz-holder.component.html',
  styleUrls: ['./quiz-holder.component.css']
})
export class QuizHolderComponent implements OnInit {

  quiz: Quiz | null = null;
  questions: QuizQuestion[] = [];
  currentQuestion: BehaviorSubject<QuizQuestion | null> = new BehaviorSubject<QuizQuestion | null>(null);
  userName: string = '';

  private quizInProgress: Subject<boolean> = new Subject<boolean>();

  constructor(private userQuizData: UserQuizDataService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.userName = this.userQuizData.userName;

    this.userQuizData.getCurrentQuiz()
      .pipe(
        tap((e) => this.quiz = e),
        tap((e) => this.questions = [...e.questions]),
        tap((e) => this.nextQuestion()),
        mergeMap(e => this.currentQuestion),
        takeUntil(this.quizInProgress),
        finalize(() => {
          this.router.navigate(['summary'], { relativeTo: this.route.parent})
        })
      )
      .subscribe()
  }

  checkAnswer(answer: string[]) {

    const currentQuestion = this.currentQuestion.getValue();

    if (currentQuestion) {
      this.userQuizData.addAnswer(currentQuestion, answer);
      this.nextQuestion();
    } else {
      this.quizInProgress.next(true); // something is wrong - push signal to disable quizz
    }
  }

  progress() {
    return this.userQuizData.getProgress();
  }

  private nextQuestion() {
    if (this.questions && this.questions.length > 0) {
      this.currentQuestion.next(
        this.questions.shift() || null
      )
    } else {
      this.quizInProgress.next(true);
    }
  }
}
