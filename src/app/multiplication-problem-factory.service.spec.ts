import { TestBed } from '@angular/core/testing';

import { MultiplicationProblemFactoryService } from './multiplication-problem-factory.service';

describe('MultiplicationProblemFactoryService', () => {
  let service: MultiplicationProblemFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiplicationProblemFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
