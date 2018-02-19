import { Component, Inject } from '@angular/core';
import { HoldsService } from '../../services/holds.service';
import { HoldModel } from '../../models/hold-model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-holds-dialog',
  templateUrl: './holds-dialog.component.html',
  styleUrls: ['./holds-dialog.component.scss']
})
export class HoldsDialogComponent implements OnInit {
  holds: HoldModel[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private holdsService: HoldsService,
              public holdsDialogRef: MatDialogRef<HoldsDialogComponent>) { }

  ngOnInit() {
    this.holds = this.holdsService.getHolds();
  }

  closeSelf() {
    this.holdsDialogRef.close();
  }

}
