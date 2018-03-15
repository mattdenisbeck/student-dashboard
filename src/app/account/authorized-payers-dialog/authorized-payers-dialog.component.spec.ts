import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedPayersDialogComponent } from './authorized-payers-dialog.component';

describe('AuthorizedPayersDialogComponent', () => {
  let component: AuthorizedPayersDialogComponent;
  let fixture: ComponentFixture<AuthorizedPayersDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizedPayersDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedPayersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
