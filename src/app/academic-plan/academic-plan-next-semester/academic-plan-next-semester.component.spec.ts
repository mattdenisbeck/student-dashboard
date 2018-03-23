import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicPlanNextSemesterComponent } from './academic-plan-next-semester.component';

describe('AcademicPlanNextSemesterComponent', () => {
  let component: AcademicPlanNextSemesterComponent;
  let fixture: ComponentFixture<AcademicPlanNextSemesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicPlanNextSemesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicPlanNextSemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
