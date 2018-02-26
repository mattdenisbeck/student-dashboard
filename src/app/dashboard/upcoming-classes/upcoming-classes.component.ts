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

  constructor(private classScheduleService: ClassScheduleService, public classDialog: MatDialog) { }

  ngOnInit() {
    this.upcomingClasses = this.classScheduleService.getUpcomingClasses(3);
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
