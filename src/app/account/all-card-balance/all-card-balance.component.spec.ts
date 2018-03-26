import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCardBalanceComponent } from './all-card-balance.component';

describe('AllCardBalanceComponent', () => {
  let component: AllCardBalanceComponent;
  let fixture: ComponentFixture<AllCardBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCardBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCardBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
