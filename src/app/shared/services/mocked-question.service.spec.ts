import { TestBed } from '@angular/core/testing';

import { MockedQuestionService } from './mocked-question.service';

describe('MockedQuestionService', () => {
  let service: MockedQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockedQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
