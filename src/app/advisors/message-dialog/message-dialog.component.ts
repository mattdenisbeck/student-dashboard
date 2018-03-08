import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss']
})
export class MessageDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public messageDialogRef: MatDialogRef<MessageDialogComponent>) { }

  ngOnInit() {
  }

  sendMessage(message: string) {
    console.log('sending message');
    console.log('to:\n' + this.data.email);
    console.log('message:\n' + message);
  }

}
