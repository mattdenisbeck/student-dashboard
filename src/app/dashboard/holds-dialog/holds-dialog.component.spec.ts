import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldsDialogComponent } from './holds-dialog.component';

describe('HoldsDialogComponent', () => {
  let component: HoldsDialogComponent;
  let fixture: ComponentFixture<HoldsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoldsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
