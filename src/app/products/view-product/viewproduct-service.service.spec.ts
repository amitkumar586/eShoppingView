import { TestBed } from '@angular/core/testing';

import { ViewProductServiceService } from './viewproduct-service.service';

describe('ViewproductServiceService', () => {
  let service: ViewProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
