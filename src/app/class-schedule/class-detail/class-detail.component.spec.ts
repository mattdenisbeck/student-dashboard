import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDetailComponent } from './class-detail.component';
import { ClassScheduleModule } from '../class-schedule.module';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material/dialog';

describe('ClassDetailComponent', () => {
  let component: ClassDetailComponent;
  let fixture: ComponentFixture<ClassDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [   ],
      imports: [
        ClassScheduleModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue : {
          'number': 'HIS 226',
          'title': 'History of Western Europe',
          'location': 'LAC 364',
          'days': ['Tuesday', 'Thursday'],
          'day': '',
          'startTime': new Date('1970-01-01 10:00'),
          'endTime': new Date('1970-01-01 11:15'),
          'instructor': 'John Q. Professor',
          'icon': 'public'
        } },
        { provide: MatDialogRef, useValue: {}},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
