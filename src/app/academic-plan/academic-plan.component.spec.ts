import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicPlanComponent } from './academic-plan.component';

describe('AcademicPlanComponent', () => {
  let component: AcademicPlanComponent;
  let fixture: ComponentFixture<AcademicPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
