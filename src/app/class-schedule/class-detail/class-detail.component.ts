import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.scss']
})
export class ClassDetailComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public course: any ) { }

  ngOnInit() {
  }

}
