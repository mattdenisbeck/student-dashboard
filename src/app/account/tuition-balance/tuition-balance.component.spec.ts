import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuitionBalanceComponent } from './tuition-balance.component';

describe('TuitionBalanceComponent', () => {
  let component: TuitionBalanceComponent;
  let fixture: ComponentFixture<TuitionBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuitionBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuitionBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
