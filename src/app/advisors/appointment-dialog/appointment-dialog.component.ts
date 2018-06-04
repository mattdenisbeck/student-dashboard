import { Component, OnInit, Inject, OnDestroy, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.scss']
})
export class AppointmentDialogComponent implements OnInit, OnDestroy {
  form: FormGroup;
  screenSizeWatcher: Subscription;
  isMobile: boolean;
  minDate = new Date(Date.now());
  maxDate = new Date(Date.now());
  noWeekendsFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public messageDialogRef: MatDialogRef<AppointmentDialogComponent>,
    private media: ObservableMedia, public snackBar: MatSnackBar, private formBuilder: FormBuilder) { }

  ngOnInit() {
    // set minDate to tomorrow
    this.minDate.setDate(this.minDate.getDate() + 1);
    this.maxDate.setDate(this.maxDate.getDate() + 90);
    this.screenSizeWatcher = this.media.subscribe(
      (change: MediaChange) => {
        if ( change.mqAlias === 'xs') {
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }
      }
    );
    this.form = this.formBuilder.group({
      email: [{value: this.data.email, disabled: true}, [Validators.required, Validators.email]],
      date: [{value: null, disabled: true}, Validators.required],
      hour: [null, Validators.required],
      minute: [null, Validators.required],
    });
  }

  ngOnDestroy() {
    this.screenSizeWatcher.unsubscribe();
  }

  sendAppointmentRequest(date: string, hour: any, minute: any) {
    console.log('requesting appointment for');
    console.log(date + ' ' + hour + ':' + minute);
    // to do: implement sending email
    this.snackBar.open('Appointment Request Sent: ' + date + ' ' + hour + ':' + minute +
    '. Expect an email message from your advisor to confirm/change your appoinment.' , 'Dismiss', {
      duration: 7000
    });
  }

}
