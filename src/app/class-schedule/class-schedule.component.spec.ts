import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassScheduleComponent } from './class-schedule.component';
import { ClassScheduleModule } from './class-schedule.module';
import { ClassScheduleService } from '../services/class-schedule.service';

describe('ClassScheduleComponent', () => {
  let component: ClassScheduleComponent;
  let fixture: ComponentFixture<ClassScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [
        ClassScheduleModule
      ],
      providers: [
        ClassScheduleService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
