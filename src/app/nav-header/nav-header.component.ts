import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

  @Input() student: Student;
  @Input() route: string;
  @Output() clickProfileBtn: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleNav() {
    this.clickProfileBtn.emit(true);
  }

}
