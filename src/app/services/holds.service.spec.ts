import { TestBed, inject } from '@angular/core/testing';

import { HoldsService } from './holds.service';

describe('HoldsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HoldsService]
    });
  });

  it('should be created', inject([HoldsService], (service: HoldsService) => {
    expect(service).toBeTruthy();
  }));
});
