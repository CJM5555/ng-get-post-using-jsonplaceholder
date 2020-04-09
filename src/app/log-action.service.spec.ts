import { TestBed } from '@angular/core/testing';

import { LogActionService } from './log-action.service';

describe('LogActionService', () => {
  let service: LogActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
