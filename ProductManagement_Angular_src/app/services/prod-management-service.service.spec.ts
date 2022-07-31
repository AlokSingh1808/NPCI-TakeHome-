import { TestBed } from '@angular/core/testing';

import { ProdManagementServiceService } from './prod-management-service.service';

describe('ProdManagementServiceService', () => {
  let service: ProdManagementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdManagementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
