import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss']
})
export class MessageDialogComponent implements OnInit {

  form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public messageDialogRef: MatDialogRef<MessageDialogComponent>,
    public snackBar: MatSnackBar, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [{value: this.data.email, disabled: true}, [Validators.required, Validators.email]],
      message: [null, Validators.required],
    });
  }

  sendMessage(message: string) {
    console.log('sending message');
    console.log('to:\n' + this.data.email);
    console.log('message:\n' + message);
    // to do: implement sending email
    this.snackBar.open('Message sent to advisor.' , 'Dismiss', {
      duration: 3000
    });
  }

}
