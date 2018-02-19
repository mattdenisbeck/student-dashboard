import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorseFeedComponent } from './norse-feed.component';

describe('NorseFeedComponent', () => {
  let component: NorseFeedComponent;
  let fixture: ComponentFixture<NorseFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorseFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorseFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
