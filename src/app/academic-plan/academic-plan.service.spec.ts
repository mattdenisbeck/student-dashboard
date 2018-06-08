import { TestBed, inject } from '@angular/core/testing';

import { AcademicPlanService } from './academic-plan.service';

describe('AcademicPlanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcademicPlanService]
    });
  });

  it('should be created', inject([AcademicPlanService], (service: AcademicPlanService) => {
    expect(service).toBeTruthy();
  }));
});
