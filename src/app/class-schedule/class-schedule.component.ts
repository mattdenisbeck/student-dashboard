import { Component, OnInit } from '@angular/core';
import { ClassScheduleService } from '../services/class-schedule.service';
import { ClassModel } from '../models/class-model';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-class-schedule',
  templateUrl: './class-schedule.component.html',
  styleUrls: ['./class-schedule.component.scss']
})
export class ClassScheduleComponent implements OnInit {

  classes: ClassModel[];

  constructor(private classScheduleService: ClassScheduleService, public classDetailDialog: MatDialog) { }

  ngOnInit() {
    this.classes = this.classScheduleService.getClasses();
  }

  openClassDetailDialog(course: ClassModel) {
    const holdsDialogRef = this.classDetailDialog.open(ClassDetailComponent, {
      'panelClass': 'holdsDialog',
      'minWidth': '360px',
      'maxWidth': '500px',
      'position': {'top': '100px'},
      'data': course
    });
  }

}
