import {Component, EventEmitter, Input, Output} from '@angular/core';
import {QuizQuestion} from "../../../shared/models/QuizQuestion";
import {QuizAnswer} from "../../../shared/models/QuizAnswer";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent {

  @Input()
  question: QuizQuestion | null = null;

  @Output()
  selectAnswer: EventEmitter<string[]> = new EventEmitter<string[]>()

  questionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.questionForm = this.fb.group({
      answer: [null, [Validators.required]]
    })
  }

  checkAnswer() {
    if (this.questionForm.invalid) {
      return;
    }
    this.selectAnswer.emit(this.questionForm.value.answer);
  }

  get answer(): FormControl {
    return this.questionForm.get('answer') as FormControl;
  }
}
