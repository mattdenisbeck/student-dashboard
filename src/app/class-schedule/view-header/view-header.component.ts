import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-header',
  templateUrl: './view-header.component.html',
  styleUrls: ['./view-header.component.scss']
})
export class ViewHeaderComponent implements OnInit {
  @Input() viewDate: Date;
  @Input() view: string;
  @Input() semester: string;
  @Output() dateChange = new EventEmitter<Date>();
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

  changeDate() {
    this.dateChange.emit(this.viewDate);
  }

}
