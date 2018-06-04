import { Component, OnInit } from '@angular/core';
import { AdvisorsService } from '../services/advisors.service';
import { AdvisorModel } from '../models/advisor-model';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AppointmentDialogComponent } from './appointment-dialog/appointment-dialog.component';

@Component({
  selector: 'app-advisors',
  templateUrl: './advisors.component.html',
  styleUrls: ['./advisors.component.scss']
})
export class AdvisorsComponent implements OnInit {

  advisors: AdvisorModel[];
  advisorMessage: {};

  constructor( private advisorsService: AdvisorsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.advisorsService.getAdvisors()
        .subscribe(resp => {
          // get headers
          const keys = resp.headers.keys();
          const headers = keys.map(key =>
            `${key}: ${resp.headers.get(key)}`);

          // set advisors from response body
          this.advisors = resp.body;
        });
  }

  openDialog(email: string, type: string) {
    const config = {
      'panelClass': 'allDialogs',
      'width': '500px',
      'minWidth': '360px',
      'maxHeight': '400px',
      'position': {'top': '100px'},
      'data': {'email': email}
    };

    let dialogRef: MatDialogRef<any>;

    switch (type) {
      case 'appointment':
        dialogRef = this.dialog.open(AppointmentDialogComponent, config);
        break;
      default:
        dialogRef = this.dialog.open(MessageDialogComponent, config);
    }

    dialogRef.afterClosed().subscribe(result => {
      // display error/confirmation message if needed
    });
  }

}
