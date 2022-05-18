import { TestBed } from '@angular/core/testing';

import { HasQuizInProgressGuard } from './has-quiz-in-progress.guard';

describe('HasQuizInProgressGuard', () => {
  let guard: HasQuizInProgressGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HasQuizInProgressGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
