import { TestBed } from '@angular/core/testing';

import { PlanserviseService } from './planservise.service';

describe('PlanserviseService', () => {
  let service: PlanserviseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanserviseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
