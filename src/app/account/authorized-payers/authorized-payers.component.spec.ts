import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedPayersComponent } from './authorized-payers.component';

describe('AuthorizedPayersComponent', () => {
  let component: AuthorizedPayersComponent;
  let fixture: ComponentFixture<AuthorizedPayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizedPayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedPayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
