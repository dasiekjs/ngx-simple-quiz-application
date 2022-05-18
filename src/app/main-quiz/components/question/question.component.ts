import {
  Component,
  forwardRef,
  Input,
  OnChanges, OnInit,
  SimpleChanges,
} from '@angular/core';
import {ControlValueAccessor, FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {QuizAnswerType} from "../../../shared/models/QuizQuestion";
import {QuizAnswer} from "../../../shared/models/QuizAnswer";
import {Subject, takeUntil, tap} from "rxjs";
import {mergeMap} from "rxjs/operators";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => QuestionComponent),
      multi: true
    }
  ]
})
export class QuestionComponent implements ControlValueAccessor, OnChanges, OnInit {

  @Input()
  answers: QuizAnswer[] | null = null;

  @Input()
  summaryMode: boolean = false;

  @Input()
  type: QuizAnswerType = 'single'

  private reloadForm: Subject<boolean> = new Subject<boolean>();

  onChange: any = () => {}
  onTouch: any = () => {}

  @Input()
  disable: boolean = false;

  form: FormGroup;

  @Input()
  name: string = `question_${+new Date()}`;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      answer: [],
      answers: this.fb.array([])
    });
  }

  registerOnChange(fn:any) { this.onChange = fn;  }

  ngOnInit() {
    this.reloadForm
      .pipe(
        tap(() => this.form.patchValue({answer: null, answers: []})),
        tap(() => this.onChange(this.buildValue())),
        mergeMap(() => this.initAndWatchForm())
      ).subscribe();

    this.reloadForm.next(true);
  }


  ngOnChanges(changes: SimpleChanges) {
    // reset value when answers changes
    if (changes['answers'].previousValue) {
      this.reloadForm.next(true);
    }
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(obj: string[]): void {
    if (obj) {
      if (this.type == "single") {
        this.form.patchValue({
          answer: obj[0]
        })
      } else {
        this.formAnswers.controls.forEach((control, index) => {
          if (this.answers && this.answers[index] && obj.indexOf(this.answers[index].answer) > -1) {
            control.get('checked')?.setValue(true);
          }
        })
      }
    }
  }

  private initAndWatchForm() {
    this.formAnswers.clear();
    if (this.type === 'multiple') {
      this.answers?.forEach((e) => {
        const element = this.fb.group({
          checked: []
        });
        if (this.summaryMode) {
          element.disable();
        }
        this.formAnswers.push(element);
      })
    } else {

      if (this.summaryMode) {
        this.form.get('answer')?.disable();
      }
    }

    return this.form.valueChanges
      .pipe(
        tap((value) => this.onChange(this.buildValue())),
        takeUntil(this.reloadForm),
      )
  }

  get formAnswers() {
    return this.form.get('answers') as FormArray;
  }

  private buildValue() {
    if (this.type === 'single') {
      return [this.form.value.answer];
    } else {
      const checkedValues = this.form.value.answers;
      return this.answers?.filter((v, index) => checkedValues && checkedValues[index] && checkedValues[index].checked)
        .map(e => e.answer)
    }
  }
}
