import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HoldsDialogComponent } from '../holds-dialog/holds-dialog.component';

@Component({
  selector: 'app-vital-stats',
  templateUrl: './vital-stats.component.html',
  styleUrls: ['./vital-stats.component.scss']
})
export class VitalStatsComponent implements OnInit {

  constructor(public holdsDialog: MatDialog) { }

  ngOnInit() {
  }

  openHoldsDialog() {
    const holdsDialogRef = this.holdsDialog.open(HoldsDialogComponent, {
      'panelClass': 'holdsDialog',
      'minWidth': '360px',
      'position': {'top': '100px'}
    });
  }
}
