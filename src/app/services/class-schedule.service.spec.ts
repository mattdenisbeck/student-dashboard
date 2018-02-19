import { TestBed, inject } from '@angular/core/testing';

import { ClassScheduleService } from './class-schedule.service';

describe('ClassScheduleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassScheduleService]
    });
  });

  it('should be created', inject([ClassScheduleService], (service: ClassScheduleService) => {
    expect(service).toBeTruthy();
  }));
});
