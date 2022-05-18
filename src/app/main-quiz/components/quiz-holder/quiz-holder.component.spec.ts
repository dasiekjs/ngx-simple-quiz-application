import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizHolderComponent } from './quiz-holder.component';

describe('QuizHolderComponent', () => {
  let component: QuizHolderComponent;
  let fixture: ComponentFixture<QuizHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
