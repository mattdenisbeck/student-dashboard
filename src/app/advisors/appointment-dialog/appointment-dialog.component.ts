import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.scss']
})
export class AppointmentDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public messageDialogRef: MatDialogRef<AppointmentDialogComponent>) { }

  ngOnInit() {
  }

  sendAppointmentRequest(message: string) {
    console.log('sending message');
    console.log('to:\n' + this.data.email);
    console.log('message:\n' + message);
  }

}
