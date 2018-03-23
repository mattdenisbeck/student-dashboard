import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingClassesComponent } from './upcoming-classes.component';
import { MatCardModule, MatIconModule, MatDividerModule, MatListModule, MatDialogModule } from '@angular/material';
import { ClassScheduleService } from '../../services/class-schedule.service';

describe('UpcomingClassesComponent', () => {
  let component: UpcomingClassesComponent;
  let fixture: ComponentFixture<UpcomingClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UpcomingClassesComponent
      ],
      imports: [
        MatCardModule,
        MatIconModule,
        MatDividerModule,
        MatListModule,
        MatDialogModule
      ],
      providers: [
        ClassScheduleService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
