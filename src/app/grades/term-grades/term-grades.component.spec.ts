import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermGradesComponent } from './term-grades.component';

describe('TermGradesComponent', () => {
  let component: TermGradesComponent;
  let fixture: ComponentFixture<TermGradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermGradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
