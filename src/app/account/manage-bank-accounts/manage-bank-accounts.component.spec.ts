import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBankAccountsComponent } from './manage-bank-accounts.component';

describe('ManageBankAccountsComponent', () => {
  let component: ManageBankAccountsComponent;
  let fixture: ComponentFixture<ManageBankAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBankAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBankAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
