import { TestBed } from '@angular/core/testing';

import { UserQuizDataService } from './user-quiz-data.service';

describe('UserQuizDataService', () => {
  let service: UserQuizDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserQuizDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
