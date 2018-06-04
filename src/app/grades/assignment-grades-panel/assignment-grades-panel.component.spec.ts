import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentGradesPanelComponent } from './assignment-grades-panel.component';

describe('AssignmentGradesPanelComponent', () => {
  let component: AssignmentGradesPanelComponent;
  let fixture: ComponentFixture<AssignmentGradesPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentGradesPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentGradesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
