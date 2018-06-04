import { Component, OnInit, Input } from '@angular/core';
import { ClassModel } from '../../models/class-model';
import { ClassDetailComponent } from '../class-detail/class-detail.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  @Input() classes: ClassModel[];
  @Input() semester: string;
  @Input() viewDate: Date;
  @Input() view: string;
  @Input() title: string;
  @Input() error: string;

  constructor(public classDetailDialog: MatDialog) { }

  ngOnInit() {
  }

  openClassDetailDialog(course: ClassModel) {
    const classDetailDialogRef = this.classDetailDialog.open(ClassDetailComponent, {
      'panelClass': 'allDialogs',
      'minWidth': '360px',
      'maxWidth': '500px',
      'position': {'top': '100px'},
      'data': course
    });
  }

}
