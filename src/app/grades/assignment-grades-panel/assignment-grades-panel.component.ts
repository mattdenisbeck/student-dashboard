import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-assignment-grades-panel',
  templateUrl: './assignment-grades-panel.component.html',
  styleUrls: ['./assignment-grades-panel.component.scss']
})
export class AssignmentGradesPanelComponent implements OnInit {

  @Input() courseGrades: {};

  constructor() { }

  ngOnInit() {
  }

}
