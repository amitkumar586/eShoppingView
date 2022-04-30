import { TestBed } from '@angular/core/testing';

import { AddproductServiceService } from './addproduct-service.service';

describe('AddproductServiceService', () => {
  let service: AddproductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddproductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
