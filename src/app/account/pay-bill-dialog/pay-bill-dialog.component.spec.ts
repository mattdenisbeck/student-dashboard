import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayBillDialogComponent } from './pay-bill-dialog.component';

describe('PayBillDialogComponent', () => {
  let component: PayBillDialogComponent;
  let fixture: ComponentFixture<PayBillDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayBillDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayBillDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
