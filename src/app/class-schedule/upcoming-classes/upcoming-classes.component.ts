import { Component, OnInit } from '@angular/core';
import { ClassScheduleService } from '../../services/class-schedule.service';
import { ClassModel } from '../../models/class-model';
import { MatDialog } from '@angular/material';
import { ClassDetailComponent } from '../../class-schedule/class-detail/class-detail.component';

@Component({
  selector: 'app-upcoming-classes',
  templateUrl: './upcoming-classes.component.html',
  styleUrls: ['./upcoming-classes.component.scss']
})
export class UpcomingClassesComponent implements OnInit {
  upcomingClasses: ClassModel[];
  error: string;

  constructor(private classScheduleService: ClassScheduleService, public classDialog: MatDialog) { }

  ngOnInit() {
    this.classScheduleService.getClasses()
        .subscribe(resp => {
          // get headers
          const keys = resp.headers.keys();
          const headers = keys.map(key =>
            `${key}: ${resp.headers.get(key)}`);
          // set upcoming classes from response body
          const classes = resp.body;
          classes.forEach( (clazz) => {
              clazz.startTime = new Date(clazz.startTime);
              clazz.endTime = new Date(clazz.endTime);
            }
          );
          this.upcomingClasses = this.classScheduleService.getUpcomingClasses(3, classes);
        },
        err => { this.error = err; }
        );
  }

  openDialog(course: ClassModel) {
    let dialogRef: any;
    dialogRef = this.classDialog.open(ClassDetailComponent, {
      'panelClass': 'allDialogs',
      'minWidth': '360px',
      'maxWidth': '500px',
      'position': {'top': '100px'},
      'data': course
    });
  }
}
