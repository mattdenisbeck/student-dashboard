import { TestBed, inject } from '@angular/core/testing';

import { AdvisorsService } from './advisors.service';

describe('AdvisorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvisorsService]
    });
  });

  it('should be created', inject([AdvisorsService], (service: AdvisorsService) => {
    expect(service).toBeTruthy();
  }));
});
