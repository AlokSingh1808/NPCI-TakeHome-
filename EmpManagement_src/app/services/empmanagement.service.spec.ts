import { TestBed } from '@angular/core/testing';

import { EmpmanagementService } from './empmanagement.service';

describe('EmpmanagementService', () => {
  let service: EmpmanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpmanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
