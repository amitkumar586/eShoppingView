import { TestBed } from '@angular/core/testing';

import { ViewproductServiceService } from './viewproduct-service.service';

describe('ViewproductServiceService', () => {
  let service: ViewproductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewproductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
