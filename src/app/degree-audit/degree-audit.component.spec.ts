import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeAuditComponent } from './degree-audit.component';

describe('DegreeAuditComponent', () => {
  let component: DegreeAuditComponent;
  let fixture: ComponentFixture<DegreeAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreeAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreeAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
