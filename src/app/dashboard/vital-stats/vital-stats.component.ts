import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HoldsDialogComponent } from '../holds-dialog/holds-dialog.component';
import { HoldsService } from '../../services/holds.service';

@Component({
  selector: 'app-vital-stats',
  templateUrl: './vital-stats.component.html',
  styleUrls: ['./vital-stats.component.scss']
})
export class VitalStatsComponent implements OnInit {

  holdsCount: number;

  constructor(public holdsDialog: MatDialog, public holdsService: HoldsService) { }

  ngOnInit() {
    this.holdsCount = this.holdsService.getHolds().length;
  }

  openHoldsDialog() {
    const holdsDialogRef = this.holdsDialog.open(HoldsDialogComponent, {
      'panelClass': 'allDialogs',
      'minWidth': '360px',
      'position': {'top': '100px'}
    });
  }
}
